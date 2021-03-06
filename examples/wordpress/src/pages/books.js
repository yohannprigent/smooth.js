import React from 'react'
import gql from 'graphql-tag'

export const contentFragment = gql`
  fragment BookProps on Book {
    name
  }
`

export default function Book({ name }) {
  return <div>{name}</div>
}
