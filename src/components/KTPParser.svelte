<script>
  import nomorToKata from "../logic/nomorToKata";
  import {DateTime} from 'luxon';

  export let nik = "";
  export let fullName = "";
  export let birthPlace = "";
  export let birthDate = "";
  export let sex = "";
  export let address = {};
  export let martialStatus = "";
  export let jobs = "";
  export let npwp = "";
  export let phone = "";
  export let email = "";

  function gender(sex, mstat) {
    if (sex == "female" && mstat == "single") {
      return "Nona";
    } else if (sex == "male") {
      return 'Tuan';
    }
    return "Nyonya";
  }

  function dateParser(dates) {
    let splitDate = dates.split("-");
    let year = splitDate[0];
    let month = splitDate[1];
    let day = splitDate[2];

    return `${nomorToKata(year)}`
  }
</script>

<p class="uk-text-capitalize">
  {gender(sex, martialStatus)},
  <strong class="uk-text-uppercase">{fullName}</strong>, lahir di {birthPlace},
  pada tanggal {DateTime.fromISO(birthDate).setLocale('id').toFormat('dd-LL-yyyy')} ({dateParser(birthDate)}), {jobs}, Warga Negara Indonesia, Pemegang Kartu Tanda Penduduk dengan Nomor Induk Kependudukan {nik}, bertempat tinggal di {address.city}, {address.street}, Rukun Tetangga {address.rt}, Rukun Warga {address.rw}, Desa/Kelurahan {address.kelurahan}, Kecamatan {address.kecamatan},
</p>
