import {UseFormReturn,FieldPathByValue, FieldValues} from 'react-hook-form'

export type FieldValuesFromPath<
  PathString extends string,
  ValueType
> = PathString extends `${infer T}.${infer U}`
  ? { [Value in T]: FieldValuesFromPath<U, ValueType> }
  : { [V in PathString]: ValueType };


  export interface FormElementComponent<ExpectedType, AdditionalProps = unknown> {
    <Key extends string, ProvidedFieldValues extends FieldValuesFromPath<Key, ExpectedType>>(
      props: {
        form: UseFormReturn<ProvidedFieldValues>;
        name: Key extends FieldPathByValue<ProvidedFieldValues, ExpectedType> ? Key : never;
      } & AdditionalProps
    ): ReturnType<React.FC>;
  }

  export interface FormSectionComponent<
  ExpectedFieldValues extends FieldValues,
  AdditionalProps = unknown
> {
  <ProvidedFieldValues extends ExpectedFieldValues>(
    props: {
      form: ProvidedFieldValues extends ExpectedFieldValues
        ? UseFormReturn<ProvidedFieldValues>
        : never;
    } & AdditionalProps
  ): ReturnType<React.FC>;
}