const share = () => () => {
  if (navigator.share) {
    alert("Share activado (only with https)")
    navigator.share({
      title: document.title,
      text: '¡Mira! Este es mi bowl :)',
      url: '',
    })
  .then(() => console.log('Successful share'))
  .catch((error) => console.log('Error sharing', error));
  } else {
    alert("Share desactivado")
  }
  return {};
};

export { share }