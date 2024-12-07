import { Label } from '@/components/ui/label'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { GalleryVerticalEnd, Search } from 'lucide-react'
import { pretendard } from './fonts'
import './globals.css'
import Image from 'next/image'
import { site } from './site'

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn(`${pretendard.className}`, 'antialiased')}>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size='lg'>
                    <Image src={site.logo} alt='Logo' width={32} height={32} />
                    <div className='flex flex-col gap-0.5 leading-none'>
                      <span className='font-bold text-xl tracking-tight'>
                        {site.title}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
              {site.nav.map((section) => (
                <SidebarGroup key={section.title}>
                  <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {section.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <a href={item.url}>{item.title}</a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
            <SidebarRail />
          </Sidebar>
          <SidebarInset>
            <div className='w-full p-2'>
              <SidebarTrigger className='block md:hidden' />
            </div>
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
