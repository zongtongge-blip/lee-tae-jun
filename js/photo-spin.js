/* =====================================================================
 * photo-spin.js - 목록 카드 사진 클릭 시 한 바퀴 회전 후 상세 페이지 이동
 * ---------------------------------------------------------------------
 * 상세 페이지(.detail__hero) 사진은 회전하지 않습니다.
 * ===================================================================== */

(function () {
  document.addEventListener(
    "click",
    function (e) {
      const photo = e.target.closest(".card__thumb");
      if (!photo) return;

      const card = photo.closest("a.card");
      if (!card) return;
      if (photo.classList.contains("is-spinning")) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // 먼저 이동을 막고, 회전이 끝난 뒤 상세 페이지로 이동
      e.preventDefault();
      e.stopPropagation();

      const href = card.getAttribute("href");
      photo.classList.add("is-spinning");

      photo.addEventListener(
        "animationend",
        function () {
          photo.classList.remove("is-spinning");
          if (href) {
            location.hash = href.replace(/^#/, "");
          }
        },
        { once: true }
      );
    },
    true
  );
})();
