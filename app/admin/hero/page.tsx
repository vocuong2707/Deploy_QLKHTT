'use client'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/Utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import EditHero from "../../components/Admin/Customization/EditHero"
import DashboadrHero from "../../components/Admin/DashboardHero";



const page = () => {

    return ( 
        <div>
        <AdminProtected>
          <Heading
            title="Học Trực Tuyến"
            description="nền tảng để học sinh học tập và nhận sự trợ giúp từ giáo viên"
            keyword="Lập trình, MERN, Redux, Học máy"
          />
          <div className="flex h-screen">
            <div className="1500px:w-[20%] w-1/5">
              <AdminSidebar />
            </div>
            <div className="w-[85%] ">
              <DashboadrHero />
              {/* <CreateCourse /> */}
              <EditHero  />
            </div>
          </div>
        </AdminProtected>
      </div>
    )
}

export default page