<template>
  <div class="toggle-switch">
    <label class="switch-label">
      <input type="checkbox" class="checkbox" @change="DarcMode" v-model="Store.isDarkMode" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup>
import { useData } from "@/stores/data.js";
const Store = useData();
const DarcMode = (event) => {
  const body = document.querySelector("body");
  if (event.target.checked) {
    body.style.backgroundColor = "white";
    Store.isDarkMode = true;
  } else {
    body.style.backgroundColor = "#282c33";
    Store.isDarkMode = false;
  }
};
</script>

<style lang="scss" scoped>
.toggle-switch {
  position: relative;
  width: 40px;
  height: 20px;
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
}

.switch-label {
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: var(--dark);
  border-radius: 25px;
  cursor: pointer;
  border: 3px solid var(--dark);
}

.checkbox {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked~.slider {
  background-color: var(--light);
}

.slider::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  -webkit-box-shadow: inset 5px -1px 0px 0px var(--light);
  box-shadow: inset 5px -1px 0px 0px var(--light);
  background-color: var(--dark);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked~.slider::before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
  background-color: var(--dark);
  -webkit-box-shadow: none;
  box-shadow: none;
}

@media screen and (max-width: 1024px) {
  .toggle-switch {
    position: relative;
    width: 75px;
    height: 30px;
    --light: #d8dbe0;
    --dark: #28292c;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
    padding-left: 16px;
    margin-top: 20px;
  }

  .switch-label {
    position: absolute;
    width: 100%;
    height: 40px;
    background-color: var(--dark);
    border-radius: 25px;
    cursor: pointer;
    border: 3px solid var(--dark);
  }

  .checkbox {
    position: absolute;
    display: none;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked~.slider {
    background-color: var(--light);
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    -webkit-box-shadow: inset 12px -4px 0px 0px var(--light);
    box-shadow: inset 12px -4px 0px 0px var(--light);
    background-color: var(--dark);
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .checkbox:checked~.slider::before {
    -webkit-transform: translateX(35px);
    -ms-transform: translateX(35px);
    transform: translateX(35px);
    background-color: var(--dark);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
</style>
