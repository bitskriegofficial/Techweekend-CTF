var a = 0;
function set() {
  if (
    document.getElementById('User').value == 'Th1s 1s 4n 3nCrYpT3D C00K13' &&
    a == 1
  ) {
    document.getElementById('Head').innerHTML =
      'TECHWKND{Th1s_1s_th3_D3rypt3D_Fl4g}';
  } else if (a == 1) window.alert("That's the wrong value");
  if (document.getElementById('User').value == 'TechWeekend' && a == 0) {
    document.cookie =
      'Text' +
      '=' +
      'MDEwMTAxMDAgMDExMDEwMDAgMDAxMTAwMDEgMDExMTAwMTEgMDAxMDAwMDAgMDAxMTAwMDEgMDExMTAwMTEgMDAxMDAwMDAgMDAxMTAxMDAgMDExMDExMTAgMDAxMDAwMDAgMDAxMTAwMTEgMDExMDExMTAgMDEwMDAwMTEgMDExMTAwMTAgMDEwMTEwMDEgMDExMTAwMDAgMDEwMTAxMDAgMDAxMTAwMTEgMDEwMDAxMDAgMDAxMDAwMDAgMDEwMDAwMTEgMDAxMTAwMDAgMDAxMTAwMDAgMDEwMDEwMTEgMDAxMTAwMDEgMDAxMTAwMTE=' +
      '; ' +
      30;
    document.getElementById('Head').innerHTML =
      "Alright, I've given you something. Refine it and give it back to me.";
    document.getElementById('Head').classList.add('d-4');
    a = 1;
  } else if (a == 0)
    window.alert("That's the wrong username, look around for the correct one.");
}
