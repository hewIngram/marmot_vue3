<template>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="$emit('entered')"
      class="customInput"
      :disabled="disabled"
      :maxLength="maxLength"
      :placeholder="placeholder"
      :readOnly="readOnly"
      :required="required"
      :id="id"
      :aria-label="ariaLabel"
      :autocomplete="autocomplete"
    />
  </template>
  
  <script>
  export default {
    name: 'TextInput',
    props: {
        modelValue: String,
      maxLength: Number,
      disabled: Boolean,
      placeholder: String,
      readOnly: Boolean,
      required: Boolean,
      id: String,
      autocomplete: String,
      ariaLabel: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    emits: ['update:modelValue', 'entered']
  }
  </script>
  
  <style scoped src="./TextInput.css" />
  <style src ="../global.css" />
  