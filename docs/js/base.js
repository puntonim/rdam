const onDocumentReadyAll = () => {
  showEmail();
  showPhone();
};
document.addEventListener("DOMContentLoaded", onDocumentReadyAll);

const showEmail = () => {
  const emailSpans = document.querySelectorAll(".emailjs-nim");
  emailSpans.forEach((i) => {
    i.innerHTML = `<a href="mailto:capellilsn@gmail.com" title="Email">capellilsn@gmail.com</a>`;
  });
};

const showPhone = () => {
  const phoneSpans = document.querySelectorAll(".phonejs-nim");
  phoneSpans.forEach((i) => {
    i.innerHTML = `<a href="tel:+393470619320" title="Telefono">+39 347 0619320</a>`; // Enrico.
  });

  const secondaryPhoneSpans = document.querySelectorAll(
    ".secondary-phonejs-nim"
  );
  secondaryPhoneSpans.forEach((i) => {
    i.innerHTML = `<a href="tel:+393400696869" title="Telefono">+39 340 0696869</a>`; // Alessandro.
  });
};

const sleep = async (msec) => {
  return new Promise((resolve) => setTimeout(resolve, msec));
};
