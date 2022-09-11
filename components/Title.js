import Head from 'next/head'
import React from 'react'

export default function Title({ title }) {
  return (
    <Head>
      <title>Capres | {`${title}`}</title>
    </Head>
  )
}
