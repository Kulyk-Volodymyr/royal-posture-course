export function plansDialogs() {
  /*=============== Values from form ===============*/
  let userName = "";
  let userPhone = "";
  let userEmail = "";
  let userMessage = "";

  /*========== Response on submit ==========*/
  const dialogSubmitResponse = document.getElementById(
    "dialog-submit-response"
  );
  document.getElementById("close-dialog-submit-response").onclick =
    function () {
      dialogSubmitResponse.close();
    };

  /*========== Dialog plan I Myself ==========*/
  const dialogPlanIMyself = document.getElementById("dialog-plan-i-myself");

  document.getElementById("close-dialog-plan-i-myself").onclick = () => {
    dialogPlanIMyself.close();
  };

  const nameIMyself = document.getElementById("myself-name");
  nameIMyself.onchange = (event) => {
    userName = event.target.value;
  };
  nameIMyself.onkeydown = (event) => {
    if (event.target.classList.contains("dialog__form-input-error"))
      event.target.classList.remove("dialog__form-input-error");
  };

  const phoneIMyself = document.getElementById("myself-phone");
  phoneIMyself.onchange = (event) => (userPhone = event.target.value);

  const emailIMyself = document.getElementById("myself-email");
  emailIMyself.onchange = (event) => (userEmail = event.target.value);
  emailIMyself.onkeydown = (event) => {
    if (event.target.classList.contains("dialog__form-input-error"))
      event.target.classList.remove("dialog__form-input-error");
  };

  const messageIMyself = document.getElementById("myself-message");
  messageIMyself.onchange = (event) => (userMessage = event.target.value);

  const privacyIMyself = document.getElementById("myself-privacy");
  privacyIMyself.onchange = (event) => {
    if (event.target.classList.contains("dialog__form-checkbox-check-error"))
      event.target.classList.remove("dialog__form-checkbox-check-error");
  };
  const agreementIMyself = document.getElementById("myself-agreement");
  agreementIMyself.onchange = (event) => {
    if (event.target.classList.contains("dialog__form-checkbox-check-error"))
      event.target.classList.remove("dialog__form-checkbox-check-error");
  };

  document.getElementById("myself-submit").onclick = () =>
    validateForm(nameIMyself, emailIMyself, privacyIMyself, agreementIMyself);

  document.getElementById("myself-form").onsubmit = () =>
    submitForm(privacyIMyself, agreementIMyself);

  /*========== Dialog plan All Inclusive ==========*/
  const dialogPlanAllInclusive = document.getElementById(
    "dialog-plan-all-inclusive"
  );

  document.getElementById("close-dialog-plan-all-inclusive").onclick = () => {
    dialogPlanAllInclusive.close();
  };

  const nameAllInclusive = document.getElementById("inclusive-name");
  nameAllInclusive.onchange = (event) => (userName = event.target.value);
  nameAllInclusive.onkeydown = (event) => {
    if (event.target.classList.contains("dialog__form-input-error"))
      event.target.classList.remove("dialog__form-input-error");
  };

  const phoneAllInclusive = document.getElementById("inclusive-phone");
  phoneAllInclusive.onchange = (event) => (userPhone = event.target.value);

  const emailAllInclusive = document.getElementById("inclusive-email");
  emailAllInclusive.onchange = (event) => (userEmail = event.target.value);
  emailAllInclusive.onkeydown = (event) => {
    if (event.target.classList.contains("dialog__form-input-error"))
      event.target.classList.remove("dialog__form-input-error");
  };

  const messageAllInclusive = document.getElementById("inclusive-message");
  messageAllInclusive.onchange = (event) => (userMessage = event.target.value);

  const privacyAllInclusive = document.getElementById("inclusive-privacy");
  privacyAllInclusive.onchange = (event) => {
    if (event.target.classList.contains("dialog__form-checkbox-check-error"))
      event.target.classList.remove("dialog__form-checkbox-check-error");
  };
  const agreementAllInclusive = document.getElementById("inclusive-agreement");
  agreementAllInclusive.onchange = (event) => {
    if (event.target.classList.contains("dialog__form-checkbox-check-error"))
      event.target.classList.remove("dialog__form-checkbox-check-error");
  };

  document.getElementById("inclusive-submit").onclick = () =>
    validateForm(
      nameAllInclusive,
      emailAllInclusive,
      privacyAllInclusive,
      agreementAllInclusive
    );

  document.getElementById("inclusive-form").onsubmit = () =>
    submitForm(privacyAllInclusive, agreementAllInclusive);

  /*========== Dialog plan VIP ==========*/
  const dialogPlanVip = document.getElementById("dialog-plan-vip");

  document.getElementById("close-dialog-plan-vip").onclick = () => {
    dialogPlanVip.close();
  };

  const nameVip = document.getElementById("vip-name");
  nameVip.onchange = (event) => (userName = event.target.value);
  nameVip.onkeydown = (event) => {
    if (event.target.classList.contains("dialog__form-input-error"))
      event.target.classList.remove("dialog__form-input-error");
  };

  const phoneVip = document.getElementById("vip-phone");
  phoneVip.onchange = (event) => (userPhone = event.target.value);

  const emailVip = document.getElementById("vip-email");
  emailVip.onchange = (event) => (userEmail = event.target.value);
  emailVip.onkeydown = (event) => {
    if (event.target.classList.contains("dialog__form-input-error"))
      event.target.classList.remove("dialog__form-input-error");
  };

  const messageVip = document.getElementById("vip-message");
  messageVip.onchange = (event) => (userMessage = event.target.value);

  const privacyVip = document.getElementById("vip-privacy");
  privacyVip.onchange = (event) => {
    if (event.target.classList.contains("dialog__form-checkbox-check-error"))
      event.target.classList.remove("dialog__form-checkbox-check-error");
  };
  const agreementVip = document.getElementById("vip-agreement");
  agreementVip.onchange = (event) => {
    if (event.target.classList.contains("dialog__form-checkbox-check-error"))
      event.target.classList.remove("dialog__form-checkbox-check-error");
  };

  document.getElementById("vip-submit").onclick = () =>
    validateForm(nameVip, emailVip, privacyVip, agreementVip);

  document.getElementById("vip-form").onsubmit = () =>
    submitForm(privacyVip, agreementVip);

  /*========== Dialog choosing a plan ==========*/
  const dialogChoosePlan = document.getElementById("dialog-choose-plan");

  document.getElementById("close-dialog-choose-plan").onclick = () => {
    dialogChoosePlan.close();
  };

  document.getElementById("toggle-dialog-plan-i-myself").onclick = () => {
    dialogChoosePlan.close();
    openDialog(
      nameIMyself,
      phoneIMyself,
      emailIMyself,
      messageIMyself,
      dialogPlanIMyself
    );
  };

  document.getElementById("toggle-dialog-plan-all-inclusive").onclick = () => {
    dialogChoosePlan.close();
    openDialog(
      nameAllInclusive,
      phoneAllInclusive,
      emailAllInclusive,
      messageAllInclusive,
      dialogPlanAllInclusive
    );
  };

  document.getElementById("toggle-dialog-plan-vip").onclick = () => {
    dialogChoosePlan.close();
    openDialog(nameVip, phoneVip, emailVip, messageVip, dialogPlanVip);
  };

  const nameChoosePlan = document.getElementById("choose-plan-name");
  nameChoosePlan.onchange = (event) => (userName = event.target.value);

  const phoneChoosePlan = document.getElementById("choose-plan-phone");
  phoneChoosePlan.onchange = (event) => (userPhone = event.target.value);

  const emailChoosePlan = document.getElementById("choose-plan-email");
  emailChoosePlan.onchange = (event) => (userEmail = event.target.value);

  const messageChoosePlan = document.getElementById("choose-plan-message");
  messageChoosePlan.onchange = (event) => (userMessage = event.target.value);

  /*========== Buttons for dialogs openning ==========*/
  document.getElementById("button-plan-i-myself").onclick = () =>
    openDialog(
      nameIMyself,
      phoneIMyself,
      emailIMyself,
      messageIMyself,
      dialogPlanIMyself
    );

  document.getElementById("button-plan-all-inclusive").onclick = () =>
    openDialog(
      nameAllInclusive,
      phoneAllInclusive,
      emailAllInclusive,
      messageAllInclusive,
      dialogPlanAllInclusive
    );

  document.getElementById("button-plan-vip").onclick = () =>
    openDialog(nameVip, phoneVip, emailVip, messageVip, dialogPlanVip);

  Array.from(document.getElementsByClassName("orange-button")).forEach(
    (element) => {
      element.onclick = () =>
        openDialog(
          nameChoosePlan,
          phoneChoosePlan,
          emailChoosePlan,
          messageChoosePlan,
          dialogChoosePlan
        );
    }
  );

  document.getElementById("header-join-btn").onclick = () =>
    openDialog(
      nameChoosePlan,
      phoneChoosePlan,
      emailChoosePlan,
      messageChoosePlan,
      dialogChoosePlan
    );

  /*========== Functions ==========*/
  function openDialog(name, phone, email, message, dialog) {
    name.value = userName;
    phone.value = userPhone;
    email.value = userEmail;
    message.value = userMessage;
    dialog.show();
  }

  function validateForm(name, email, privacy, agreement) {
    if (!name.checkValidity()) name.classList.add("dialog__form-input-error");
    if (!email.checkValidity()) email.classList.add("dialog__form-input-error");
    if (!privacy.checked)
      privacy.classList.add("dialog__form-checkbox-check-error");
    if (!agreement.checked)
      agreement.classList.add("dialog__form-checkbox-check-error");
  }

  function submitForm(privacy, agreement) {
    userName = "";
    userPhone = "";
    userEmail = "";
    userMessage = "";

    privacy.checked = false;
    agreement.checked = false;

    setTimeout(() => {
      dialogSubmitResponse.show();
    }, 2000);
  }
}
