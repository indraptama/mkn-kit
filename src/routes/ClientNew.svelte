<script>
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { pop } from "svelte-spa-router";
  import db from "../firebase";

  import loggedIn$ from "../store/userStore.js";
  const userLogged = loggedIn$;

  function handleCancel() {
    pop();
  }

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      nik: "",
      fullName: "",
      birthPlace: "",
      // birthDate: "",
      birthDay: "",
      birthMonth: "",
      birthYear: "",
      sex: "male",
      streetAddress: "",
      rt: "",
      rw: "",
      kelurahan: "",
      kecamatan: "",
      city: "",
      martialStatus: "single",
      jobs: "",
      npwp: "000",
      phone: "+62",
      email: "mail@mail.com",
    },
    validationSchema: yup.object().shape({
      nik: yup
        .number()
        .typeError("anda hanya dapat input Angka")
        .positive()
        .integer()
        .min(
          1000000000000000,
          "Jumlah angka yang anda input kurang. NIK harus terdiri dari 16 Angka"
        )
        .max(
          9599999999999999,
          "Jumlah angka yang anda input lebih. NIK harus terdiri dari 16 Angka"
        )
        .required("Anda belum input NIK"),
      fullName: yup.string().required("Nama Lengkap harus diisi"),
      birthPlace: yup.string().required("Kota Kelahiran harus diisi"),
      // birthDate: yup.date().transform((value, oriValue) => {
      //   let result = DateTime.isDateTime(oriValue) ? oriValue : DateTime.fromFormat(oriValue, "dd-MM-YYYY").toISODate();
      //   return result
      // }),
      birthDay: yup
        .number()
        .typeError("Tanggal Salah")
        .positive()
        .integer()
        .max(31, "Tanggal Salah")
        .required(),
      birthMonth: yup
        .number()
        .typeError("Bulan Salah")
        .positive()
        .integer()
        .max(12, "Bulan Salah")
        .required(),
      birthYear: yup
        .number()
        .typeError("Tahun Salah")
        .positive()
        .integer()
        .min(1900, "Tahun Salah")
        .max(2100)
        .required(),
      sex: yup.string().oneOf(["male", "female"]).required(),
      streetAddress: yup.string().required(),
      rt: yup.number().typeError().positive().integer().max(99).required(),
      rw: yup.number().typeError().positive().integer().max(99).required(),
      kelurahan: yup.string().required(),
      kecamatan: yup.string().required(),
      city: yup
        .string()
        .matches(/(Kota|Kabupaten|kota|kabupaten)/, {
          message: "Jenis administrasi Kota/Kabupaten belum ditulis",
        })
        .required(),
      martialStatus: yup
        .string()
        .oneOf(["single", "marriage", "divorced", "widowed"])
        .required(),
      jobs: yup.string().required(),
      npwp: yup.number(),
      phone: yup.number(),
      email: yup.string().email(),
      // avatar: yup.string(),
    }),
    onSubmit: (values) => {
      let submitData = {
        nik: values.nik,
        fullName: values.fullName.toLowerCase(),
        birthPlace: values.birthPlace.toLowerCase(),
        birthDate: `${values.birthYear}-${values.birthMonth}-${values.birthDay}`,
        sex: values.sex,
        address: {
          street: values.streetAddress.toLowerCase(),
          rt: values.rt,
          rw: values.rw,
          kelurahan: values.kelurahan.toLowerCase(),
          kecamatan: values.kecamatan.toLowerCase(),
          city: values.city.toLowerCase(),
        },
        martialStatus: values.martialStatus,
        jobs: values.jobs.toLowerCase(),
        npwp: values.npwp,
        phone: values.phone,
        email: values.email,
        user: {
          name: $userLogged.displayName,
          uid: $userLogged.uid,
          photoURL: $userLogged.photoURL,
          email: $userLogged.email,
        }
      };

      console.log(submitData)
      
      db.collection("client")
        .add(submitData)
        .then(function (docRef) {
      //     // console.log("Document written with ID: ", docRef);
      //     // clientStore.update(()=> {
      //     //   clientStore = [...clientStore, submitData]
      //     // })
      //     // notifStore.set({
      //     //   isOpen: true,
      //     //   title: "Berhasil",
      //     //   kind: "success",
      //     //   caption: `Penghadap ${values.fullName.toUpperCase()} berhasil di registrasi`,
      //     // });

          $form.nik = "";
          $form.fullName = "";
          $form.birthPlace = "";
          $form.birthDay = "";
          $form.birthMonth = "";
          $form.birthYear = "";
          $form.sex = "male";
          $form.streetAddress = "";
          $form.rt = "";
          $form.rw = "";
          $form.kelurahan = "";
          $form.kecamatan = "";
          $form.city = "";
          $form.martialStatus = "single";
          $form.jobs = "";
          $form.npwp = "000";
          $form.phone = "+62";
          $form.email = "mail@mail.com";
      //     // setTimeout(() => {
      //     //   notifStore.set({
      //     //     isOpen: false,
      //     //   });
      //     // }, 3000);
        })
        .then(function () {
          pop();
        })
        .catch(function (error) {
      //     // notifStore.set({
      //     //   isOpen: true,
      //     //   title: "Gagal",
      //     //   kind: "error",
      //     //   caption: error,
      //     // });
        });
    },
  });
</script>

<div class="uk-container uk-margin-large-top">
  <h2 class="heading">Tambah Klien</h2>
</div>

<form on:submit={handleSubmit}>
  <div class="uk-container uk-margin-medium-top">
    <div class="uk-card uk-card-body uk-card-default uk-margin-medium">
      <h4 class="uk-card-title">Data Identitas</h4>

      <!-- NIK -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Nomor Induk Kependudukan</p>
        </div>
        <div class="uk-width-expand">
          <input
            type="text"
            class={`uk-input ${$errors.nik ? "uk-form-danger" : ""} `}
            name="nik"
            on:change={handleChange}
            bind:value={$form.nik}
          />
          {#if $errors.nik}
            <span class="uk-text-small uk-text-danger">{$errors.nik}</span>
          {/if}
        </div>
      </div>

      <!-- Nama Lengkap -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-margin-remove-bottom uk-text-bold">Nama Lengkap</p>
          <span class="uk-text-muted uk-text-small">
            Nama lengkap sesuai dengan yang tertulis di Kartu Identitas</span
          >
        </div>
        <div class="uk-width-expand">
          <input
            type="text"
            class={`uk-input ${$errors.fullName ? "uk-form-danger" : ""} `}
            name="fullName"
            on:change={handleChange}
            bind:value={$form.fullName}
          />
          {#if $errors.fullName}
            <span class="uk-text-small uk-text-danger">{$errors.fullName}</span>
          {/if}
        </div>
      </div>

      <!-- Tempat Tanggal Lahir -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Tempat, Tanggal Lahir</p>
        </div>
        <div class="uk-width-expand">
          <div uk-grid>
            <div class="uk-width-expand">
              <input
                type="text"
                class={`uk-input ${
                  $errors.birthPlace ? "uk-form-danger" : ""
                } `}
                name="birthPlace"
                on:change={handleChange}
                bind:value={$form.birthPlace}
              />
              {#if $errors.birthPlace}
                <span class="uk-text-small uk-text-danger"
                  >{$errors.birthPlace}</span
                >
              {:else}
                <span class="uk-text-small uk-text-muted">Kota Kelahiran</span>
              {/if}
            </div>
            <div class="uk-width-1-6">
              <input
                type="text"
                class={`uk-input ${$errors.birthDay ? "uk-form-danger" : ""} `}
                name="birthDay"
                on:change={handleChange}
                bind:value={$form.birthDay}
              />
              {#if $errors.birthDay}
                <span class="uk-text-small uk-text-danger"
                  >{$errors.birthDay}</span
                >
              {:else}
                <span class="uk-text-small uk-text-muted">Tgl.Lahir</span>
              {/if}
            </div>
            <div class="uk-width-1-6">
              <input
                type="text"
                class={`uk-input ${
                  $errors.birthMonth ? "uk-form-danger" : ""
                } `}
                name="birthMonth"
                on:change={handleChange}
                bind:value={$form.birthMonth}
              />
              {#if $errors.birthMonth}
                <span class="uk-text-small uk-text-danger"
                  >{$errors.birthMonth}</span
                >
              {:else}
                <span class="uk-text-small uk-text-muted">Bln. Lahir</span>
              {/if}
            </div>
            <div class="uk-width-1-6">
              <input
                type="text"
                class={`uk-input ${$errors.birthYear ? "uk-form-danger" : ""} `}
                name="birthYear"
                on:change={handleChange}
                bind:value={$form.birthYear}
              />
              {#if $errors.birthYear}
                <span class="uk-text-small uk-text-danger"
                  >{$errors.birthYear}</span
                >
              {:else}
                <span class="uk-text-small uk-text-muted">Thn. Lahir</span>
              {/if}
            </div>
          </div>
        </div>
      </div>

      <!-- Jenis Kelamin -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Jenis Kelamin</p>
        </div>
        <div class="uk-width-expand">
          <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <div>
              <input
                class="uk-radio"
                value="male"
                type="radio"
                name="radio2"
                checked
                bind:group={$form.sex}
              /> Laki-laki
            </div>
            <div>
              <input
                class="uk-radio"
                value="female"
                type="radio"
                name="radio2"
                bind:group={$form.sex}
              /> Perempuan
            </div>
          </div>
        </div>
      </div>

      <!-- Alamat -->
      <div uk-grid>
        <div class="uk-width-1-3"><p class="uk-text-bold">Alamat</p></div>
        <div class="uk-width-expand">
          <div uk-grid>
            <div class="uk-width-1-1">
              <input
                type="text"
                class={`uk-input ${
                  $errors.streetAddress ? "uk-form-danger" : ""
                } `}
                name="streetAddress"
                on:change={handleChange}
                bind:value={$form.streetAddress}
              />
              {#if $errors.streetAddress}
                <span class="uk-text-small uk-text-danger"
                  >{$errors.streetAddress}</span
                >
              {:else}
                <span class="uk-text-small uk-text-muted">Jalan</span>
              {/if}
            </div>
            <div class="uk-width-1-4">
              <input
                type="text"
                class={`uk-input ${$errors.rt ? "uk-form-danger" : ""} `}
                name="rt"
                on:change={handleChange}
                bind:value={$form.rt}
              />
              {#if $errors.rt}
                <span class="uk-text-small uk-text-danger">{$errors.rt}</span>
              {:else}
                <span class="uk-text-small uk-text-muted">RT</span>
              {/if}
            </div>
            <div class="uk-width-1-4">
              <input
                type="text"
                class={`uk-input ${$errors.rw ? "uk-form-danger" : ""} `}
                name="rw"
                on:change={handleChange}
                bind:value={$form.rw}
              />
              {#if $errors.rw}
                <span class="uk-text-small uk-text-danger">{$errors.rw}</span>
              {:else}
                <span class="uk-text-small uk-text-muted">RW</span>
              {/if}
            </div>
            <div class="uk-width-1-2">
              <input
                type="text"
                class={`uk-input ${$errors.kelurahan ? "uk-form-danger" : ""} `}
                name="kelurahan"
                on:change={handleChange}
                bind:value={$form.kelurahan}
              />
              {#if $errors.kelurahan}
                <span class="uk-text-small uk-text-danger"
                  >{$errors.kelurahan}</span
                >
              {:else}
                <span class="uk-text-small uk-text-muted">Desa/Kelurahan</span>
              {/if}
            </div>
            <div class="uk-width-1-2">
              <input
                type="text"
                class={`uk-input ${$errors.kecamatan ? "uk-form-danger" : ""} `}
                name="kecamatan"
                on:change={handleChange}
                bind:value={$form.kecamatan}
              />
              {#if $errors.kecamatan}
                <span class="uk-text-small uk-text-danger"
                  >{$errors.kecamatan}</span
                >
              {:else}
                <span class="uk-text-small uk-text-muted">Kecamatan</span>
              {/if}
            </div>
            <div class="uk-width-1-2">
              <input
                type="text"
                class={`uk-input ${$errors.city ? "uk-form-danger" : ""} `}
                name="city"
                on:change={handleChange}
                bind:value={$form.city}
              />
              {#if $errors.city}
                <span class="uk-text-small uk-text-danger">{$errors.city}</span>
              {:else}
                <span class="uk-text-small uk-text-muted"
                  >Kota/Kabupaten. Tulis berserta jenis administrasi-nya</span
                >
              {/if}
            </div>
          </div>
        </div>
      </div>

      <!-- Status Perkawinan  -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Status Perkawinan</p>
        </div>
        <div class="uk-width-expand">
          <select class="uk-select" name="martialStatus" bind:value={$form.martialStatus}>
            <option value="single">Belum Menikah</option>
            <option value="marriage">Menikah</option>
            <option value="divorced">Cerai Hidup</option>
            <option value="widowed">Cerai Mati</option>
          </select>
        </div>
      </div>

      <!-- Pekerjaan -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Pekerjaan</p>
        </div>
        <div class="uk-width-expand">
          <input
            type="text"
            class={`uk-input ${$errors.jobs ? "uk-form-danger" : ""} `}
            name="jobs"
            on:change={handleChange}
            bind:value={$form.jobs}
          />
          {#if $errors.jobs}
            <span class="uk-text-small uk-text-danger">{$errors.jobs}</span>
          {/if}
        </div>
      </div>
    </div>

    <div class="uk-card uk-card-body uk-card-default uk-margin-medium">
      <h4 class="uk-card-title">Data Tambahan</h4>
      <!-- NPWP -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Nomor Pokok Wajib Pajak</p>
        </div>
        <div class="uk-width-expand">
          <input type="text" class="uk-input" name="npwp" bind:value={$form.npwp}/>
        </div>
      </div>

      <!-- Nomor Telephone -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">No.Telephone</p>
        </div>
        <div class="uk-width-expand">
          <input type="text" class="uk-input" name="phone" bind:value={$form.phone} />
        </div>
      </div>

      <!-- Email -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">E-Mail</p>
        </div>
        <div class="uk-width-expand">
          <input type="text" class="uk-input" name="email" bind:value={$form.email} />
        </div>
      </div>
    </div>

    <div class="uk-card uk-card-body uk-card-default uk-margin-medium">
      <h4 class="uk-card-title">Unggah Berkaspnpm</h4>
      <!-- NPWP -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">Nomor Pokok Wajib Pajak</p>
        </div>
        <div class="uk-width-expand">
          <input type="text" class="uk-input" />
        </div>
      </div>

      <!-- Nomor Telephone -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">No.Telephone</p>
        </div>
        <div class="uk-width-expand">
          <input type="text" class="uk-input" value="+62" />
        </div>
      </div>

      <!-- Email -->
      <div uk-grid>
        <div class="uk-width-1-3">
          <p class="uk-text-bold">E-Mail</p>
        </div>
        <div class="uk-width-expand">
          <input type="text" class="uk-input" value="mail@mail.com" />
        </div>
      </div>
    </div>

    <div class="uk-margin">
      <div uk-grid class="uk-flex-right">
        <div />
        <div>
          <button class="uk-button uk-button-default" on:click={() => pop()}>
            Batal
          </button>
        </div>
        <div>
          <button class="uk-button uk-button-primary" type="submit">
            simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
