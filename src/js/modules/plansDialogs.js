export function plansDialogs() {
  const dialogSubmitResponse = document.getElementById(
    "dialog-submit-response"
  );
  document.getElementById("close-dialog-submit-response").onclick =
    function () {
      dialogSubmitResponse.close();
    };

  const dialogPlanIMyself = document.getElementById("dialog-plan-i-myself");
  document.getElementById("button-plan-i-myself").onclick = function () {
    dialogPlanIMyself.show();
  };
  document.getElementById("close-dialog-plan-i-myself").onclick = function () {
    dialogPlanIMyself.close();
  };
  document.getElementById("myself-form").onsubmit = submitForm;

  const dialogPlanAllInclusive = document.getElementById(
    "dialog-plan-all-inclusive"
  );
  document.getElementById("button-plan-all-inclusive").onclick = function () {
    dialogPlanAllInclusive.show();
  };
  document.getElementById("close-dialog-plan-all-inclusive").onclick =
    function () {
      dialogPlanAllInclusive.close();
    };
  document.getElementById("inclusive-form").onsubmit = submitForm;

  const dialogPlanVip = document.getElementById("dialog-plan-vip");
  document.getElementById("button-plan-vip").onclick = function () {
    dialogPlanVip.show();
  };
  document.getElementById("close-dialog-plan-vip").onclick = function () {
    dialogPlanVip.close();
  };
  document.getElementById("vip-form").onsubmit = submitForm;

  function submitForm() {
    this.reset();
    setTimeout(() => {
      dialogSubmitResponse.show();
    }, 2000);
  }
}
