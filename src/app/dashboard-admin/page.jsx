import React from 'react'
import Layout from '@/components/layouts'
import DashboardAdmin from '@/components/dashboard-admin'

export default function page() {
  return (
    <>
    <Layout>
        <div className="mt-2">
        <DashboardAdmin/>
        </div>
    </Layout>
    </>
  )
}
