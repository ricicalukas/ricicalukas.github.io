document.getElementById('expand').addEventListener('click', function () {
  var appAvaible = document.getElementById('appAvaible');
  var appDownload = document.getElementById('appDownload');
  appAvaible.classList.toggle("visible");
  appDownload.classList.toggle("visible");
});
