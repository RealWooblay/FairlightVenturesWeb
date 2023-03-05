<template>
    <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
  </template>
  
  <script>
  import { reactive, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
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
      const route = useRoute()
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
          route.push(props.to)
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
.storybook-button--primary { /* In use */
  color: black;
  background-color: white;
  border: 1px solid black;
  font-size: 16px;
  padding: 15px 44px;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}


.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
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
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 2px 0px 2px inset;
  border-radius: 40px;
  font-size: 40px;
  padding: 40px 184px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>