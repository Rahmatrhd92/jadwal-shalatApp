//ambil tanggal hari ini
const getDate = new Date();
const getYear = getDate.getFullYear();
const getMont = getDate.getMonth() + 1;
const getDay = getDate.getDate();

function bulan(){
  if(getMont < 10){
    bulan = `0${getMont}`;
  } else{
    bulan = getMont
  }
  return bulan
}

function hari (){
  if (getDay < 10){
    hari = `0${getDay}`;
  } else {
    hari = getDay;
  }
  return hari;
}

 const tanggal =`${getYear}-${bulan()}-${hari()}`;
 
 
function getJadwalSholat(){
 fetch('https://api.banghasan.com/sholat/format/json/jadwal/kota/524/tanggal/' + tanggal)
.then(response => response.json())
.then(data=> {
  const jadwal = data.jadwal.data;
  document.querySelector('.imsak').textContent = jadwal.imsak;
  document.querySelector('.subuh').textContent = jadwal.subuh;
  document.querySelector('.terbit').textContent = jadwal.terbit;
  document.querySelector('.dhuhur').textContent = jadwal.dzuhur;
  document.querySelector('.asar').textContent = jadwal.ashar;
  document.querySelector('.magrib').textContent = jadwal.maghrib;
  document.querySelector('.isya').textContent = jadwal.isya;
  document.querySelector('.tanggal').textContent = jadwal.tanggal;
});

}
getJadwalSholat();




 