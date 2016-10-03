# MdSteppers
`MdSteppers` is a component to display different steps.

### Screenshots


## `<md-steppers>`
### Bound Properties

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `mode` | `"linear" | "nonlinear"` | Changes the behaviour of the `steppers` | 'linear' |
| `orientation` | `"horizontal" | "vertical"` | Changes the orientation of the `steppers` | 'horizontal' |
| `selectedIndex` | `step index number` | Changes the selected step | 0 |

### Examples
A linear stepper would have the following markup:
```html
<md-steppers mode="linear">
    <md-step>
        <template md-step-label>
            label...
        </template>
        <template md-step-content>
            content...
        </template>
        <template md-step-nav>
            buttons...
        </template>
    </md-step>
    ...
</md-steppers>
```

A non-linear stepper would have this markup:
```html
<md-steppers mode="nonlinear">
    <md-step>
        <template md-step-label>
            label...
        </template>
        <template md-step-content>
            content...
        </template>
        <template md-step-nav>
            buttons...
        </template>
    </md-step>
    ...
</md-steppers>
```

## `<md-step>`
### Bound Properties

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `active` | `boolean` | Sets the `step` active | false |
| `editable` | `boolean` | Toggles editability after `step` is completed | true |
| `valid` | `boolean` | Sets validity of the `step` | true |
| `optional` | `boolean` | Makes the `step` optional | false |
| `completed` | `boolean` | Sets the  `step` completed | false |

### Examples

A step that after set to completed is not editable would have following markup:
```html
  <md-step editable="false">
    ...
  </md-step>
```

You can use the form validation to change the validity of the step by using:
```html
  <md-step [valid]="formVariable.form.valid">
    ...
  </md-step>
```

A optional step would have following markup:
```html
  <md-step optional="true">
    ...
  </md-step>
```

## Theming
The `md-steppers` will use theme options when its finalised in Material 2.