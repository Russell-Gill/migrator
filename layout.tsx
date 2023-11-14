"use client"

import '@/styles/globals.css'

export default function Layout({ children }: {
  children: React.ReactNode
}) {

  console.log("I have fired");
  return <div> {children} </div>
}
