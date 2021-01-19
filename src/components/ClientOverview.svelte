<script>
  import { DateTime } from "luxon";

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


  const martialStat = (status) => {
    if (status == "single") return "Belum Menikah";
    else if (status == "marriage") return "Menikah";
    else if (status == "divorced") return "Cerai Hidup";
    else if (status == "widowed") return "Cerai Mati";
  };

  const gender = (Sex) => {
    if (Sex == "male") return "Laki-laki";
    if (Sex == "female") return "Perempuan";
  };
</script>

<div class="container-small">
  <ul class="uk-list">
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Nomor Induk Kependudukan</h6>
      <p class="uk-margin-remove-top">{nik}</p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Nama Lengkap</h6>
      <p class="uk-text-capitalize uk-margin-remove-top">{fullName}</p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Tempat, Tanggal Lahir</h6>
      <p class="uk-text-capitalize uk-margin-remove-top">
        {birthPlace},
        {DateTime.fromISO(birthDate)
          .setLocale("id")
          .toLocaleString(DateTime.DATE_FULL)}
      </p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Jenis Kelamin</h6>
      <p class="uk-text-capitalize uk-margin-remove-top">{gender(sex)}</p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Alamat Lengkap</h6>
      <p class="uk-text-capitalize uk-margin-remove-top ">
        {address.street}
        Rukun Tetangga
        {address.rt}, Rukun Warga
        {address.rw}, Desa/Kelurahan
        {address.kelurahan}, Kecamatan
        {address.kecamatan},
        {address.city}
      </p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Status Perkawinan</h6>
      <p class="uk-text-capitalize uk-margin-remove-top">
        {martialStat(martialStatus)}
      </p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Perkerjaan</h6>
      <p class="uk-text-capitalize uk-margin-remove-top">{jobs}</p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Nomor Pokok Wajib Pajak</h6>
      <p class="uk-text-capitalize uk-margin-remove-top">{npwp}</p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">No.Handphone</h6>
      <p class="uk-text-capitalize uk-margin-remove-top">{phone}</p>
    </li>
    <li>
      <h6 class="uk-margin-remove uk-text-bold">Email</h6>
      <p class="uk-margin-remove-top">{email}</p>
    </li>
  </ul>
</div>
