import { NButton, useOsTheme } from 'naive-ui'
import type { Ref } from 'vue'

type NButtonProps = InstanceType<typeof NButton>['$props']

export type NButtonType = NonNullable<NButtonProps['type']>

export type OsTheme = NonNullable<
  ReturnType<typeof useOsTheme> extends Readonly<Ref<infer T>> ? T : never
>
