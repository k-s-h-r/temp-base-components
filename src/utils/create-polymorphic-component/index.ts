/*
MIT License

Copyright (c) 2021 Vitaly Rtishchev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React from 'react'

// 参考
// https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/

/*

ここでは「component」を「as」に変更している

*/

type ExtendedProps<Props = {}, OverrideProps = {}> = OverrideProps & Omit<Props, keyof OverrideProps>

type ElementType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>

type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>

type ComponentProp<C> = {
  as?: C
}

type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>

export type PolymorphicRef<C> = C extends React.ElementType ? React.ComponentPropsWithRef<C>['ref'] : never

export type PolymorphicComponentProps<C, Props = {}> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { as: React.ElementType }

export function createPolymorphicComponent<ComponentDefaultType, Props, StaticComponents = Record<string, never>>(as: any) {
  type ComponentProps<C> = PolymorphicComponentProps<C, Props>

  type _PolymorphicComponent = <C = ComponentDefaultType>(props: ComponentProps<C>) => React.ReactElement

  type ComponentProperties = Omit<React.FunctionComponent<ComponentProps<any>>, never>

  type PolymorphicComponent = _PolymorphicComponent & ComponentProperties & StaticComponents

  return as as PolymorphicComponent
}
