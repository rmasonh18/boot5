/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Wed Apr 06 2022
 *
 * Filename: index.js
 *
 * Copyright (c) 2022 Bujisoft
 */

import Head from 'next/head'

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      {/* Head */}
      <Head>
        <title>Jacqueline Taylor & Friends</title>
        <meta name="description" content="Bootstrap 5 with Nextjs" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="px-4 py-5 my-5 text-center flex-grow-1">
          <h1 className="display-5 fw-bold">Bootstrap & Next</h1>
          <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">This is the first pass of nextjs with bootstrap. Will convert to landing page and later cms dynamic page</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
      </div>
    </main>
  );
}
