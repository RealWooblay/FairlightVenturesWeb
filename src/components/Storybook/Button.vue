<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>
  
<script>
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
    textdecoration: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        [`storybook-button--${props.size || 'primary'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        margin: 'auto'
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
  
<style scoped>
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}

.storybook-button--primary {
  /* In use */
  color: black;
  background-color: white;
  border: 1px solid black;
  font-size: 16px;
  padding: 15px 44px;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.storybook-button--secondary {
  color: #223D6A;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  font-family: "Reg";
}

.storybook-button--secondary:hover {
  transition: 0.8s;
  background-color: #62A5AA;
}

.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}

.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}

.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}

.storybook-button--new {
  color: #000;
  background-color: #e9eaec;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  font-family: "Reg";
}

.storybook-button--new:hover {
  transition: 0.8s;
  background-color: rgb(255, 85, 85);
}

@font-face {
  font-family: 'Bolds';
  src: url('../assets/fonts/TT_Chocolates_Trial_DemiBold.otf') format('truetype');
  /* add additional file formats here */
  font-weight: lighter;
  font-style: italic;
}
</style>