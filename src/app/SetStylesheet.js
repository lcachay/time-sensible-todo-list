export default timeframe => {
   const link = document.createElement('link');
   link.rel = 'stylesheet';
   link.href = `assets/styles/${timeframe}-style.css`
   document.head.appendChild(link);

}