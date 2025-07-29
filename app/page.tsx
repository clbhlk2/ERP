"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Users,
  FileText,
  Calendar,
  DollarSign,
  Home,
  UserCheck,
  Calculator,
  Warehouse,
  FileBarChart,
  ClipboardList,
  Wallet,
  CreditCard,
  Receipt,
  Building,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

// Yeni modüller ekle
const menuItems = [
  { icon: Home, label: "Dashboard", id: "dashboard" },
  { icon: Building2, label: "Projeler", id: "projects" },
  { icon: FileText, label: "Hakediş", id: "hakedis" },
  { icon: Users, label: "Taşeronlar", id: "contractors" },
  { icon: UserCheck, label: "Puantaj", id: "attendance" },
  { icon: Users, label: "Cari Hesap", id: "customers" },
  { icon: Warehouse, label: "Stok", id: "inventory" },
  { icon: FileText, label: "Fatura", id: "invoices" },
  { icon: ClipboardList, label: "Talep Takibi", id: "requests" },
  { icon: Wallet, label: "Kasa", id: "cash" },
  { icon: CreditCard, label: "Banka", id: "bank" },
  { icon: Receipt, label: "Çek-Senet", id: "checks" },
  { icon: Calculator, label: "Muhasebe", id: "accounting" },
  { icon: Building, label: "Sabit Kıymet", id: "assets" },
  { icon: FileBarChart, label: "Raporlar", id: "reports" },
  { icon: UserCheck, label: "Günlük Puantaj", id: "daily-attendance" },
  { icon: FileText, label: "Fatura Oluştur", id: "create-invoice" },
  { icon: Receipt, label: "Hakediş Oluştur", id: "create-hakedis" },
  { icon: FileText, label: "Belge Yönetimi", id: "document-management" },
]

export default function Component() {
  const [activeModule, setActiveModule] = useState("dashboard")

  const Sidebar = ({ className = "" }) => (
    <div className={`pb-12 ${className}`}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center mb-6">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h2 className="ml-2 text-xl font-bold text-gray-900">İnşaat ERP</h2>
          </div>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeModule === item.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveModule(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const DashboardContent = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">İnşaat projelerinizin genel durumu</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktif Projeler</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 bu ay</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Toplam Hakediş</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺2.4M</div>
            <p className="text-xs text-muted-foreground">+12% geçen aya göre</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktif Taşeronlar</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">5 proje başında</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bu Ay Puantaj</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">işçi-gün</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects and Activities */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Aktif Projeler</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="space-y-4">
              {[
                { name: "Konya Rezidans", progress: 75, budget: "₺850K", status: "Devam Ediyor" },
                { name: "Ankara Plaza", progress: 45, budget: "₺1.2M", status: "Devam Ediyor" },
                { name: "İstanbul Towers", progress: 90, budget: "₺2.1M", status: "Son Aşama" },
                { name: "Bursa Sitesi", progress: 30, budget: "₺650K", status: "Başlangıç" },
              ].map((project, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium truncate">{project.name}</p>
                      <Badge
                        variant={project.progress > 80 ? "default" : project.progress > 50 ? "secondary" : "outline"}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <Progress value={project.progress} className="flex-1 mr-2" />
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Bütçe: {project.budget}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Son Hakediş İşlemleri</CardTitle>
            <CardDescription>Bu hafta onaylanan hakediş ödemeleri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { contractor: "Mehmet İnşaat", amount: "₺125,000", project: "Konya Rezidans", date: "2 gün önce" },
                { contractor: "Yılmaz Yapı", amount: "₺89,500", project: "Ankara Plaza", date: "3 gün önce" },
                { contractor: "Demir İnşaat", amount: "₺156,000", project: "İstanbul Towers", date: "5 gün önce" },
              ].map((payment, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {payment.contractor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{payment.contractor}</p>
                    <p className="text-xs text-muted-foreground">{payment.project}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{payment.amount}</p>
                    <p className="text-xs text-muted-foreground">{payment.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const ProjectsContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projeler</h2>
          <p className="text-muted-foreground">Tüm inşaat projelerinizi yönetin</p>
        </div>
        <Button>
          <Building2 className="mr-2 h-4 w-4" />
          Yeni Proje
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Konya Rezidans",
            location: "Konya/Selçuklu",
            progress: 75,
            budget: "₺850,000",
            startDate: "01.03.2024",
            endDate: "15.12.2024",
            contractor: "Mehmet İnşaat",
            status: "Devam Ediyor",
          },
          {
            name: "Ankara Plaza",
            location: "Ankara/Çankaya",
            progress: 45,
            budget: "₺1,200,000",
            startDate: "15.05.2024",
            endDate: "30.03.2025",
            contractor: "Yılmaz Yapı",
            status: "Devam Ediyor",
          },
          {
            name: "İstanbul Towers",
            location: "İstanbul/Kadıköy",
            progress: 90,
            budget: "₺2,100,000",
            startDate: "10.01.2024",
            endDate: "20.11.2024",
            contractor: "Demir İnşaat",
            status: "Son Aşama",
          },
          {
            name: "Bursa Sitesi",
            location: "Bursa/Nilüfer",
            progress: 30,
            budget: "₺650,000",
            startDate: "01.08.2024",
            endDate: "15.06.2025",
            contractor: "Kaya İnşaat",
            status: "Başlangıç",
          },
        ].map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <Badge variant={project.progress > 80 ? "default" : project.progress > 50 ? "secondary" : "outline"}>
                  {project.status}
                </Badge>
              </div>
              <CardDescription>{project.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">İlerleme</span>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Bütçe:</span>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Ana Taşeron:</span>
                    <p className="font-medium">{project.contractor}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Başlangıç:</span>
                    <p className="font-medium">{project.startDate}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Bitiş:</span>
                    <p className="font-medium">{project.endDate}</p>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Detaylar
                  </Button>
                  <Button size="sm" className="flex-1">
                    Hakediş
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const HakedisContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Hakediş Yönetimi</h2>
          <p className="text-muted-foreground">Taşeron ödemelerini takip edin ve yönetin</p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Yeni Hakediş
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Ay Toplam</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺485,000</div>
            <p className="text-xs text-muted-foreground">12 hakediş işlemi</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bekleyen Onaylar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺125,000</div>
            <p className="text-xs text-muted-foreground">3 hakediş bekliyor</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Ödenen Toplam</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺360,000</div>
            <p className="text-xs text-muted-foreground">9 ödeme tamamlandı</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hakediş Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "HAK-2024-001",
                contractor: "Mehmet İnşaat",
                project: "Konya Rezidans",
                amount: "₺125,000",
                date: "15.11.2024",
                status: "Onaylandı",
                description: "Kaba inşaat 3. hakediş",
              },
              {
                id: "HAK-2024-002",
                contractor: "Yılmaz Yapı",
                project: "Ankara Plaza",
                amount: "₺89,500",
                date: "12.11.2024",
                status: "Ödendi",
                description: "Temel ve bodrum kat hakediş",
              },
              {
                id: "HAK-2024-003",
                contractor: "Demir İnşaat",
                project: "İstanbul Towers",
                amount: "₺156,000",
                date: "10.11.2024",
                status: "Bekliyor",
                description: "Son kat ve çatı hakediş",
              },
              {
                id: "HAK-2024-004",
                contractor: "Kaya İnşaat",
                project: "Bursa Sitesi",
                amount: "₺75,000",
                date: "08.11.2024",
                status: "Ödendi",
                description: "Kazı ve temel hazırlık",
              },
            ].map((hakedis, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium">{hakedis.id}</p>
                      <p className="text-sm text-muted-foreground">{hakedis.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-2 text-sm text-muted-foreground">
                    <span>{hakedis.contractor}</span>
                    <span>{hakedis.project}</span>
                    <span>{hakedis.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{hakedis.amount}</p>
                  <Badge
                    variant={
                      hakedis.status === "Ödendi" ? "default" : hakedis.status === "Onaylandı" ? "secondary" : "outline"
                    }
                  >
                    {hakedis.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ContractorsContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Taşeron Yönetimi</h2>
          <p className="text-muted-foreground">Taşeron firmalarını ve çalışanlarını yönetin</p>
        </div>
        <Button>
          <Users className="mr-2 h-4 w-4" />
          Yeni Taşeron
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Toplam Taşeron</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">5 aktif projede</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Toplam Çalışan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Tüm taşeronlar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bugün Çalışan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Aktif çalışan</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Ortalama Puantaj</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2</div>
            <p className="text-xs text-muted-foreground">saat/gün</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Taşeron Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Mehmet İnşaat Ltd.",
                contact: "Mehmet Yılmaz",
                phone: "0532 123 45 67",
                workers: 25,
                activeProjects: 2,
                totalPayment: "₺450,000",
                specialty: "Kaba İnşaat",
              },
              {
                name: "Yılmaz Yapı A.Ş.",
                contact: "Ali Yılmaz",
                phone: "0533 234 56 78",
                workers: 18,
                activeProjects: 1,
                totalPayment: "₺320,000",
                specialty: "Temel İşleri",
              },
              {
                name: "Demir İnşaat",
                contact: "Hasan Demir",
                phone: "0534 345 67 89",
                workers: 32,
                activeProjects: 3,
                totalPayment: "₺680,000",
                specialty: "Çelik Konstrüksiyon",
              },
              {
                name: "Kaya İnşaat",
                contact: "Fatma Kaya",
                phone: "0535 456 78 90",
                workers: 15,
                activeProjects: 1,
                totalPayment: "₺280,000",
                specialty: "İç Mekan",
              },
            ].map((contractor, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {contractor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{contractor.name}</p>
                    <p className="text-sm text-muted-foreground">{contractor.specialty}</p>
                    <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                      <span>{contractor.contact}</span>
                      <span>{contractor.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Çalışan</p>
                      <p className="font-medium">{contractor.workers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Proje</p>
                      <p className="font-medium">{contractor.activeProjects}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Toplam</p>
                      <p className="font-medium">{contractor.totalPayment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const AttendanceContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Puantaj Sistemi</h2>
          <p className="text-muted-foreground">Çalışan puantajlarını takip edin ve yönetin</p>
        </div>
        <Button>
          <UserCheck className="mr-2 h-4 w-4" />
          Puantaj Gir
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bugün Çalışan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">156 toplam çalışan</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Hafta Toplam</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">işçi-saat</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Mesai Saatleri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">bu hafta</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Devamsızlık</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">%8.5</div>
            <p className="text-xs text-muted-foreground">bu ay ortalama</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bugünkü Puantaj</CardTitle>
            <CardDescription>15 Kasım 2024 - Aktif çalışanlar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  name: "Ahmet Yılmaz",
                  contractor: "Mehmet İnşaat",
                  project: "Konya Rezidans",
                  hours: "8.0",
                  status: "Çalışıyor",
                },
                {
                  name: "Mehmet Kaya",
                  contractor: "Mehmet İnşaat",
                  project: "Konya Rezidans",
                  hours: "7.5",
                  status: "Çalışıyor",
                },
                {
                  name: "Ali Demir",
                  contractor: "Yılmaz Yapı",
                  project: "Ankara Plaza",
                  hours: "8.0",
                  status: "Çalışıyor",
                },
                {
                  name: "Hasan Öz",
                  contractor: "Demir İnşaat",
                  project: "İstanbul Towers",
                  hours: "6.0",
                  status: "Yarım Gün",
                },
                {
                  name: "Fatma Ak",
                  contractor: "Kaya İnşaat",
                  project: "Bursa Sitesi",
                  hours: "8.0",
                  status: "Çalışıyor",
                },
              ].map((worker, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{worker.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {worker.contractor} - {worker.project}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{worker.hours} saat</p>
                    <Badge variant={worker.status === "Çalışıyor" ? "default" : "secondary"}>{worker.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Haftalık Özet</CardTitle>
            <CardDescription>11-15 Kasım 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "Pazartesi", workers: 92, hours: 736, overtime: 24 },
                { day: "Salı", workers: 89, hours: 712, overtime: 16 },
                { day: "Çarşamba", workers: 94, hours: 752, overtime: 32 },
                { day: "Perşembe", workers: 87, hours: 696, overtime: 18 },
                { day: "Cuma", workers: 89, hours: 712, overtime: 28 },
              ].map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{day.day}</p>
                    <p className="text-sm text-muted-foreground">{day.workers} çalışan</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{day.hours} saat</p>
                    <p className="text-sm text-muted-foreground">+{day.overtime} mesai</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Yeni modül içeriklerini ekle (AttendanceContent'ten sonra)

  // 1. Günlük Puantaj Sistemi
  const DailyAttendanceContent = () => {
    const [activeTab, setActiveTab] = useState("company")
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
    const [selectedProject, setSelectedProject] = useState("")
    const [attendanceData, setAttendanceData] = useState([])

    // Şirket personeli verileri
    const companyEmployees = [
      { id: 1, name: "Ahmet Yılmaz", position: "Şantiye Şefi", department: "Teknik", hourlyRate: 150 },
      { id: 2, name: "Mehmet Kaya", position: "Mimar", department: "Teknik", hourlyRate: 120 },
      { id: 3, name: "Fatma Demir", position: "Muhasebeci", department: "Mali İşler", hourlyRate: 100 },
      { id: 4, name: "Ali Öz", position: "İnsan Kaynakları", department: "İdari", hourlyRate: 90 },
    ]

    // Taşeron personeli verileri
    const contractorEmployees = [
      { id: 1, name: "Hasan Çelik", contractor: "Mehmet İnşaat", specialty: "Kaba İnşaat", dailyRate: 800 },
      { id: 2, name: "Osman Ak", contractor: "Mehmet İnşaat", specialty: "Kaba İnşaat", dailyRate: 750 },
      { id: 3, name: "Ayşe Kara", contractor: "Yılmaz Yapı", specialty: "Temel İşleri", dailyRate: 700 },
      { id: 4, name: "Mustafa Beyaz", contractor: "Demir İnşaat", specialty: "Çelik İşleri", dailyRate: 900 },
    ]

    const projects = [
      { id: "konya", name: "Konya Rezidans" },
      { id: "ankara", name: "Ankara Plaza" },
      { id: "istanbul", name: "İstanbul Towers" },
      { id: "bursa", name: "Bursa Sitesi" },
    ]

    const addAttendance = (employee, type) => {
      const newEntry = {
        id: Date.now(),
        employeeId: employee.id,
        employeeName: employee.name,
        type: type, // 'company' or 'contractor'
        date: selectedDate,
        project: selectedProject,
        startTime: "08:00",
        endTime: "17:00",
        breakTime: 60,
        overtime: 0,
        status: "present",
        notes: "",
        ...employee
      }
      setAttendanceData([...attendanceData, newEntry])
    }

    const updateAttendance = (id, field, value) => {
      setAttendanceData(attendanceData.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      ))
    }

    const calculateHours = (startTime, endTime, breakTime) => {
      const start = new Date(`2000-01-01 ${startTime}`)
      const end = new Date(`2000-01-01 ${endTime}`)
      const diffMs = end - start
      const diffHours = diffMs / (1000 * 60 * 60)
      return Math.max(0, diffHours - (breakTime / 60))
    }

    const CompanyAttendanceTab = () => (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Şirket Personeli Listesi</CardTitle>
              <CardDescription>Puantaj girmek için personel seçin</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {companyEmployees.map((employee) => (
                  <div key={employee.id} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.position} • {employee.department}
                      </p>
                      <p className="text-xs text-muted-foreground">₺{employee.hourlyRate}/saat</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addAttendance(employee, 'company')}
                      disabled={attendanceData.some(a => a.employeeId === employee.id && a.type === 'company' && a.date === selectedDate)}
                    >
                      {attendanceData.some(a => a.employeeId === employee.id && a.type === 'company' && a.date === selectedDate)
                        ? "Eklendi" : "Puantaj Gir"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bugünkü Şirket Personeli Puantajı</CardTitle>
              <CardDescription>{selectedDate} tarihli kayıtlar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {attendanceData.filter(a => a.type === 'company' && a.date === selectedDate).map((attendance) => (
                  <div key={attendance.id} className="p-3 border rounded">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">{attendance.employeeName}</p>
                      <Badge variant={attendance.status === 'present' ? 'default' : 'secondary'}>
                        {attendance.status === 'present' ? 'Çalıştı' : 'Çalışmadı'}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <label className="text-muted-foreground">Başlangıç</label>
                        <Input
                          type="time"
                          value={attendance.startTime}
                          onChange={(e) => updateAttendance(attendance.id, 'startTime', e.target.value)}
                          className="h-8"
                        />
                      </div>
                      <div>
                        <label className="text-muted-foreground">Bitiş</label>
                        <Input
                          type="time"
                          value={attendance.endTime}
                          onChange={(e) => updateAttendance(attendance.id, 'endTime', e.target.value)}
                          className="h-8"
                        />
                      </div>
                      <div>
                        <label className="text-muted-foreground">Mola (dk)</label>
                        <Input
                          type="number"
                          value={attendance.breakTime}
                          onChange={(e) => updateAttendance(attendance.id, 'breakTime', Number.parseInt(e.target.value))}
                          className="h-8"
                        />
                      </div>
                      <div>
                        <label className="text-muted-foreground">Mesai (saat)</label>
                        <Input
                          type="number"
                          step="0.5"
                          value={attendance.overtime}
                          onChange={(e) => updateAttendance(attendance.id, 'overtime', Number.parseFloat(e.target.value))}
                          className="h-8"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm">
                        <span className="text-muted-foreground">Toplam Saat: </span> 
                        <span className="font-medium">
                          {calculateHours(attendance.startTime, attendance.endTime, attendance.breakTime) + attendance.overtime} saat
                        </span>
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Günlük Ücret: </span>
                        <span className="font-medium text-green-600">
                          ₺{((calculateHours(attendance.startTime, attendance.endTime, attendance.breakTime) + attendance.overtime) * attendance.hourlyRate).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )

    const ContractorAttendanceTab = () => (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Taşeron Personeli Listesi</CardTitle>
              <CardDescription>Puantaj girmek için personel seçin</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contractorEmployees.map((employee) => (
                  <div key={employee.id} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.contractor} • {employee.specialty}
                      </p>
                      <p className="text-xs text-muted-foreground">₺{employee.dailyRate}/gün</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addAttendance(employee, 'contractor')}
                      disabled={attendanceData.some(a => a.employeeId === employee.id && a.type === 'contractor' && a.date === selectedDate)}
                    >
                      {attendanceData.some(a => a.employeeId === employee.id && a.type === 'contractor' && a.date === selectedDate)
                        ? "Eklendi" : "Puantaj Gir"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bugünkü Taşeron Personeli Puantajı</CardTitle>
              <CardDescription>{selectedDate} tarihli kayıtlar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {attendanceData.filter(a => a.type === 'contractor' && a.date === selectedDate).map((attendance) => (
                  <div key={attendance.id} className="p-3 border rounded">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{attendance.employeeName}</p>
                        <p className="text-sm text-muted-foreground">{attendance.contractor}</p>
                      </div>
                      <Badge variant={attendance.status === 'present' ? 'default' : 'secondary'}>
                        {attendance.status === 'present' ? 'Çalıştı' : 'Çalışmadı'}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <label className="text-muted-foreground">Başlangıç</label>
                        <Input
                          type="time"
                          value={attendance.startTime}
                          onChange={(e) => updateAttendance(attendance.id, 'startTime', e.target.value)}
                          className="h-8"
                        />
                      </div>
                      <div>
                        <label className="text-muted-foreground">Bitiş</label>
                        <Input
                          type="time"
                          value={attendance.endTime}
                          onChange={(e) => updateAttendance(attendance.id, 'endTime', e.target.value)}
                          className="h-8"
                        />
                      </div>
                      <div>
                        <label className="text-muted-foreground">Mola (dk)</label>
                        <Input
                          type="number"
                          value={attendance.breakTime}
                          onChange={(e) => updateAttendance(attendance.id, 'breakTime', Number.parseInt(e.target.value))}
                          className="h-8"
                        />
                      </div>
                      <div>
                        <label className="text-muted-foreground">Mesai (saat)</label>
                        <Input
                          type="number"
                          step="0.5"
                          value={attendance.overtime}
                          onChange={(e) => updateAttendance(attendance.id, 'overtime', Number.parseFloat(e.target.value))}
                          className="h-8"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm">
                        <span className="text-muted-foreground">Toplam Saat: </span>
                        <span className="font-medium">
                          {calculateHours(attendance.startTime, attendance.endTime, attendance.breakTime) + attendance.overtime} saat
                        </span>
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Günlük Ücret: </span>
                        <span className="font-medium text-green-600">
                          ₺{attendance.dailyRate}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Günlük Puantaj Sistemi</h2>
            <p className="text-muted-foreground">Şirket ve taşeron personeli puantaj girişi</p>
          </div>
          <div className="flex gap-2">
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-40"
            />
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="">Proje Seçin</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
            <Button>Kaydet</Button>
          </div>
        </div>

        {/* Özet Kartları */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Bugün Çalışan Şirket Personeli</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {attendanceData.filter(a => a.type === 'company' && a.date === selectedDate && a.status === 'present').length}
              </div>
              <p className="text-xs text-muted-foreground">
                {companyEmployees.length} toplam personel
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Bugün Çalışan Taşeron Personeli</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {attendanceData.filter(a => a.type === 'contractor' && a.date === selectedDate && a.status === 'present').length}
              </div>
              <p className="text-xs text-muted-foreground">
                {contractorEmployees.length} toplam personel
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Toplam Çalışma Saati</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {attendanceData
                  .filter(a => a.date === selectedDate && a.status === 'present')
                  .reduce((total, a) => total + calculateHours(a.startTime, a.endTime, a.breakTime) + a.overtime, 0)
                  .toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground">saat</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Günlük Toplam Maliyet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                ₺{attendanceData
                  .filter(a => a.date === selectedDate && a.status === 'present')
                  .reduce((total, a) => {
                    if (a.type === 'company') {
                      return total + ((calculateHours(a.startTime, a.endTime, a.breakTime) + a.overtime) * a.hourlyRate)
                    } else {
                      return total + a.dailyRate
                    }
                  }, 0)
                  .toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">günlük maliyet</p>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
          <Button
            variant={activeTab === "company" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("company")}
          >
            🏢 Şirket Personeli
          </Button>
          <Button
            variant={activeTab === "contractor" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("contractor")}
          >
            👷 Taşeron Personeli
          </Button>
        </div>

        {/* Tab Content */}
        {activeTab === "company" ? <CompanyAttendanceTab /> : <ContractorAttendanceTab />}
      </div>
    )
  }

  // 2. Dinamik Fatura Formu
  const CreateInvoiceContent = () => {
    const [invoiceData, setInvoiceData] = useState({
      // Şirket Bilgileri
      companyName: "ABC İnşaat Ltd. Şti.",
      companyAddress: "Atatürk Cad. No:123 Çankaya/ANKARA",
      companyPhone: "0312 123 45 67",
      companyEmail: "info@abcinsaat.com",
      companyTaxNo: "1234567890",
      companyTaxOffice: "Çankaya Vergi Dairesi",
      companyLogo: null,

      // Fatura Bilgileri
      invoiceNo: "FAT-2024-001",
      invoiceDate: new Date().toISOString().split('T')[0],
      dueDate: "",
      currency: "TRY",

      // Müşteri Bilgileri
      customerName: "",
      customerAddress: "",
      customerTaxNo: "",
      customerTaxOffice: "",

      // Fatura Kalemleri
      items: [
        { id: 1, description: "", quantity: 1, unit: "adet", unitPrice: 0, vatRate: 20, total: 0 }
      ],

      // Notlar
      notes: "",
      paymentTerms: "Fatura tarihinden itibaren 30 gün içinde ödenecektir.",

      // Görünüm Ayarları
      showLogo: true,
      showNotes: true,
      showPaymentTerms: true,
      template: "modern" // modern, classic, minimal
    })

    const [previewMode, setPreviewMode] = useState(false)

    const addItem = () => {
      const newItem = {
        id: Date.now(),
        description: "",
        quantity: 1,
        unit: "adet",
        unitPrice: 0,
        vatRate: 20,
        total: 0
      }
      setInvoiceData({
        ...invoiceData,
        items: [...invoiceData.items, newItem]
      })
    }

    const updateItem = (id, field, value) => {
      const updatedItems = invoiceData.items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }
          if (field === 'quantity' || field === 'unitPrice') {
            updatedItem.total = updatedItem.quantity * updatedItem.unitPrice
          }
          return updatedItem
        }
        return item
      })
      setInvoiceData({ ...invoiceData, items: updatedItems })
    }

    const removeItem = (id) => {
      setInvoiceData({
        ...invoiceData,
        items: invoiceData.items.filter(item => item.id !== id)
      })
    }

    const calculateTotals = () => {
      const subtotal = invoiceData.items.reduce((sum, item) => sum + item.total, 0)
      const vatAmount = invoiceData.items.reduce((sum, item) => sum + (item.total * item.vatRate / 100), 0)
      const total = subtotal + vatAmount
      return { subtotal, vatAmount, total }
    }

    const handleLogoUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setInvoiceData({ ...invoiceData, companyLogo: e.target.result })
        }
        reader.readAsDataURL(file)
      }
    }

    const InvoicePreview = () => {
      const { subtotal, vatAmount, total } = calculateTotals()

      return (
        <div className="bg-white p-8 shadow-lg" style={{ minHeight: '297mm' }}>
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              {invoiceData.showLogo && invoiceData.companyLogo && (
                <img src={invoiceData.companyLogo || "/placeholder.svg"} alt="Logo" className="h-16 w-16 object-contain" />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{invoiceData.companyName}</h1>
                <p className="text-sm text-gray-600">{invoiceData.companyAddress}</p>
                <p className="text-sm text-gray-600">{invoiceData.companyPhone} • {invoiceData.companyEmail}</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold text-blue-600">FATURA</h2>
              <p className="text-lg font-semibold">{invoiceData.invoiceNo}</p>
              <p className="text-sm text-gray-600">Tarih: {invoiceData.invoiceDate}</p>
              {invoiceData.dueDate && <p className="text-sm text-gray-600">Vade: {invoiceData.dueDate}</p>}
            </div>
          </div>

          {/* Company & Customer Info */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Fatura Eden:</h3>
              <div className="text-sm text-gray-600">
                <p>{invoiceData.companyName}</p>
                <p>{invoiceData.companyAddress}</p>
                <p>Vergi No: {invoiceData.companyTaxNo}</p>
                <p>Vergi Dairesi: {invoiceData.companyTaxOffice}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Fatura Edilen:</h3>
              <div className="text-sm text-gray-600">
                <p>{invoiceData.customerName}</p>
                <p>{invoiceData.customerAddress}</p>
                <p>Vergi No: {invoiceData.customerTaxNo}</p>
                <p>Vergi Dairesi: {invoiceData.customerTaxOffice}</p>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <table className="w-full mb-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border">Açıklama</th>
                <th className="text-center p-3 border">Miktar</th>
                <th className="text-center p-3 border">Birim</th>
                <th className="text-right p-3 border">Birim Fiyat</th>
                <th className="text-center p-3 border">KDV %</th>
                <th className="text-right p-3 border">Toplam</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={item.id}>
                  <td className="p-3 border">{item.description}</td>
                  <td className="text-center p-3 border">{item.quantity}</td>
                  <td className="text-center p-3 border">{item.unit}</td>
                  <td className="text-right p-3 border">₺{item.unitPrice.toFixed(2)}</td>
                  <td className="text-center p-3 border">{item.vatRate}%</td>
                  <td className="text-right p-3 border">₺{item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-64">
              <div className="flex justify-between py-2">
                <span>Ara Toplam:</span>
                <span>₺{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>KDV:</span>
                <span>₺{vatAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-t-2 border-gray-300 font-bold text-lg">
                <span>Genel Toplam:</span>
                <span>₺{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Notes and Payment Terms */}
          {invoiceData.showNotes && invoiceData.notes && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Notlar:</h4>
              <p className="text-sm text-gray-600">{invoiceData.notes}</p>
            </div>
          )}

          {invoiceData.showPaymentTerms && invoiceData.paymentTerms && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Ödeme Koşulları:</h4>
              <p className="text-sm text-gray-600">{invoiceData.paymentTerms}</p>
            </div>
          )}
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dinamik Fatura Oluştur</h2>
            <p className="text-muted-foreground">Özelleştirilebilir fatura formu</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setPreviewMode(!previewMode)}>
              {previewMode ? "Düzenle" : "Önizleme"}
            </Button>
            <Button>PDF İndir</Button>
            <Button>Kaydet</Button>
          </div>
        </div>

        {!previewMode ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sol Panel - Form */}
            <div className="space-y-6">
              {/* Şirket Bilgileri */}
              <Card>
                <CardHeader>
                  <CardTitle>Şirket Bilgileri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="text-sm font-medium">Şirket Logosu</label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="showLogo"
                        checked={invoiceData.showLogo}
                        onChange={(e) => setInvoiceData({ ...invoiceData, showLogo: e.target.checked })}
                      />
                      <label htmlFor="showLogo" className="text-sm">Logo Göster</label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Şirket Adı</label>
                      <Input
                        value={invoiceData.companyName}
                        onChange={(e) => setInvoiceData({ ...invoiceData, companyName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Telefon</label>
                      <Input
                        value={invoiceData.companyPhone}
                        onChange={(e) => setInvoiceData({ ...invoiceData, companyPhone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Adres</label>
                    <Input
                      value={invoiceData.companyAddress}
                      onChange={(e) => setInvoiceData({ ...invoiceData, companyAddress: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Vergi No</label>
                      <Input
                        value={invoiceData.companyTaxNo}
                        onChange={(e) => setInvoiceData({ ...invoiceData, companyTaxNo: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Vergi Dairesi</label>
                      <Input
                        value={invoiceData.companyTaxOffice}
                        onChange={(e) => setInvoiceData({ ...invoiceData, companyTaxOffice: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fatura Bilgileri */}
              <Card>
                <CardHeader>
                  <CardTitle>Fatura Bilgileri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium">Fatura No</label>
                      <Input
                        value={invoiceData.invoiceNo}
                        onChange={(e) => setInvoiceData({ ...invoiceData, invoiceNo: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Fatura Tarihi</label>
                      <Input
                        type="date"
                        value={invoiceData.invoiceDate}
                        onChange={(e) => setInvoiceData({ ...invoiceData, invoiceDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Vade Tarihi</label>
                      <Input
                        type="date"
                        value={invoiceData.dueDate}
                        onChange={(e) => setInvoiceData({ ...invoiceData, dueDate: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Müşteri Bilgileri */}
              <Card>
                <CardHeader>
                  <CardTitle>Müşteri Bilgileri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Müşteri Adı</label>
                    <Input
                      value={invoiceData.customerName}
                      onChange={(e) => setInvoiceData({ ...invoiceData, customerName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Adres</label>
                    <Input
                      value={invoiceData.customerAddress}
                      onChange={(e) => setInvoiceData({ ...invoiceData, customerAddress: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Vergi No</label>
                      <Input
                        value={invoiceData.customerTaxNo}
                        onChange={(e) => setInvoiceData({ ...invoiceData, customerTaxNo: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Vergi Dairesi</label>
                      <Input
                        value={invoiceData.customerTaxOffice}
                        onChange={(e) => setInvoiceData({ ...invoiceData, customerTaxOffice: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sağ Panel - Kalemler */}
            <div className="space-y-6">
              {/* Fatura Kalemleri */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Fatura Kalemleri</CardTitle>
                    <Button size="sm" onClick={addItem}>Kalem Ekle</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {invoiceData.items.map((item, index) => (
                      <div key={item.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium">Kalem {index + 1}</span>
                          {invoiceData.items.length > 1 && (
                            <Button size="sm" variant="destructive" onClick={() => removeItem(item.id)}>
                              Sil
                            </Button>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium">Açıklama</label>
                            <Input
                              value={item.description}
                              onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                              placeholder="Ürün/hizmet açıklaması"
                            />
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            <div>
                              <label className="text-sm font-medium">Miktar</label>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateItem(item.id, 'quantity', Number.parseFloat(e.target.value) || 0)}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Birim</label>
                              <select
                                value={item.unit}
                                onChange={(e) => updateItem(item.id, 'unit', e.target.value)}
                                className="w-full p-2 border rounded"
                              >
                                <option value="adet">Adet</option>
                                <option value="kg">Kg</option>
                                <option value="m">Metre</option>
                                <option value="m2">m²</option>
                                <option value="m3">m³</option>
                                <option value="saat">Saat</option>
                                <option value="gun">Gün</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-sm font-medium">KDV %</label>
                              <select
                                value={item.vatRate}
                                onChange={(e) => updateItem(item.id, 'vatRate', Number.parseFloat(e.target.value))}
                                className="w-full p-2 border rounded"
                              >
                                <option value={0}>0%</option>
                                <option value={1}>1%</option>
                                <option value={8}>8%</option>
                                <option value={20}>20%</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-sm font-medium">Birim Fiyat</label>
                              <Input
                                type="number"
                                step="0.01"
                                value={item.unitPrice}
                                onChange={(e) => updateItem(item.id, 'unitPrice', Number.parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Toplam</label>
                            <Input
                              value={`₺${item.total.toFixed(2)}`}
                              disabled
                              className="bg-gray-50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notlar ve Koşullar */}
            <Card>
              <CardHeader>
                <CardTitle>Notlar ve Koşullar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      id="showNotes"
                      checked={invoiceData.showNotes}
                      onChange={(e) => setInvoiceData({ ...invoiceData, showNotes: e.target.checked })}
                    />
                    <label htmlFor="showNotes" className="text-sm font-medium">Notlar</label>
                  </div>
                  <textarea
                    value={invoiceData.notes}
                    onChange={(e) => setInvoiceData({ ...invoiceData, notes: e.target.value })}
                    className="w-full p-2 border rounded"
                    rows={3}
                    placeholder="Fatura notları..."
                  />
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      id="showPaymentTerms"
                      checked={invoiceData.showPaymentTerms}
                      onChange={(e) => setInvoiceData({ ...invoiceData, showPaymentTerms: e.target.checked })}
                    />
                    <label htmlFor="showPaymentTerms" className="text-sm font-medium">Ödeme Koşulları</label>
                  </div>
                  <textarea
                    value={invoiceData.paymentTerms}
                    onChange={(e) => setInvoiceData({ ...invoiceData, paymentTerms: e.target.value })}
                    className="w-full p-2 border rounded"
                    rows={2}
                    placeholder="Ödeme koşulları..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Toplam Özeti */}
            <Card>
              <CardHeader>
                <CardTitle>Fatura Özeti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Ara Toplam:</span>
                    <span>₺{calculateTotals().subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>KDV:</span>
                    <span>₺{calculateTotals().vatAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Genel Toplam:</span>
                    <span>₺{calculateTotals().total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        /* Önizleme Modu */
        <div className="bg-gray-100 p-4">
          <InvoicePreview />
        </div>
      )}
    </div>
  )
}

// 3. Dinamik Hakediş Formu
const CreateHakedisContent = () => (
  <div>
    <h2>Hakediş Oluştur</h2>
    {/* Hakediş oluşturma form elemanları buraya gelecek */}
  </div>
)

// 4. Belge Yönetimi
const DocumentManagementContent = () => (
  <div>
    <h2>Belge Yönetimi</h2>
    {/* Belge yönetimi ile ilgili elemanlar buraya gelecek */}
  </div>
)

// Import yeni componentleri ekle
import { CreateHakedisContent } from "../components/create-hakedis-content"
import { DocumentManagementContent } from "../components/document-management-content"

// renderContent fonksiyonuna yeni case'leri ekle
const renderContent = () => {
  switch (activeModule) {
    case "dashboard":
      return <DashboardContent />
    case "projects":
      return <ProjectsContent />
    case "hakedis":
      return <HakedisContent />
    case "contractors":
      return <ContractorsContent />
    case "attendance":
      return <AttendanceContent />
    case "customers":
      return <CustomersContent />
    case "inventory":
      return <InventoryContent />
    case "invoices":
      return <InvoicesContent />
    case "requests":
      return <RequestsContent />
    case "cash":
      return <CashContent />
    case "bank":
      return <BankContent />
    case "checks":
      return <ChecksContent />
    case "accounting":
      return <AccountingContent />
    case "assets":
      return <AssetsContent />
    case "reports":
      return <ReportsContent />
    case "daily-attendance":
      return <DailyAttendanceContent />
    case "create-invoice":
      return <CreateInvoiceContent />
    case "create-hakedis":
      return <CreateHakedisContent />
    case "document-management":
      return <DocumentManagementContent />
    default:
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h3 className="text-lg font-medium">Bu modül henüz geliştirilmekte</h3>
            <p className="text-muted-foreground">Yakında kullanıma sunulacak</p>
          </div>
        </div>
      )
  }
}

  // Cari Hesap Modülü
  const CustomersContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Cari Hesap</h2>
          <p className="text-muted-foreground">Müşteri ve tedarikçi hesaplarını yönetin</p>
        </div>
        <Button>
          <Users className="mr-2 h-4 w-4" />
          Yeni Cari
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Toplam Müşteri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">+8 bu ay</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Alacaklar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺1.2M</div>
            <p className="text-xs text-muted-foreground">45 müşteriden</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Borçlar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺850K</div>
            <p className="text-xs text-muted-foreground">28 tedarikçiye</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Net Durum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₺350K</div>
            <p className="text-xs text-muted-foreground">alacak fazlası</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cari Hesap Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "ABC İnşaat Ltd.",
                type: "Müşteri",
                balance: "₺125,000",
                status: "Alacak",
                phone: "0532 123 45 67",
              },
              {
                name: "XYZ Malzeme A.Ş.",
                type: "Tedarikçi",
                balance: "₺89,500",
                status: "Borç",
                phone: "0533 234 56 78",
              },
              {
                name: "Demir Çelik San.",
                type: "Tedarikçi",
                balance: "₺156,000",
                status: "Borç",
                phone: "0534 345 67 89",
              },
              {
                name: "Kaya Yapı Ltd.",
                type: "Müşteri",
                balance: "₺75,000",
                status: "Alacak",
                phone: "0535 456 78 90",
              },
            ].map((cari, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>
                      {cari.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{cari.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cari.type} • {cari.phone}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{cari.balance}</p>
                  <Badge variant={cari.status === "Alacak" ? "default" : "destructive"}>{cari.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Stok Yönetimi Modülü
  const InventoryContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Stok Yönetimi</h2>
          <p className="text-muted-foreground">Malzeme ve ürün stoklarını takip edin</p>
        </div>
        <Button>
          <Warehouse className="mr-2 h-4 w-4" />
          Yeni Ürün
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Toplam Ürün</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">85 kategori</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Stok Değeri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺2.8M</div>
            <p className="text-xs text-muted-foreground">maliyet değeri</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Kritik Stok</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">23</div>
            <p className="text-xs text-muted-foreground">minimum seviyede</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Ay Hareket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺456K</div>
            <p className="text-xs text-muted-foreground">giriş-çıkış</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Kritik Stoklar</CardTitle>
            <CardDescription>Minimum seviyenin altındaki ürünler</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Çimento 42.5", current: 15, minimum: 50, unit: "ton" },
                { name: "Demir 12mm", current: 8, minimum: 20, unit: "ton" },
                { name: "Tuğla", current: 2500, minimum: 5000, unit: "adet" },
                { name: "Kum", current: 12, minimum: 30, unit: "m³" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Min: {item.minimum} {item.unit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">
                      {item.current} {item.unit}
                    </p>
                    <Badge variant="destructive">Kritik</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Son Stok Hareketleri</CardTitle>
            <CardDescription>Bu haftaki giriş-çıkış işlemleri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { product: "Çimento 42.5", type: "Giriş", quantity: "+50 ton", date: "15.11.2024" },
                { product: "Demir 16mm", type: "Çıkış", quantity: "-25 ton", date: "14.11.2024" },
                { product: "Kum", type: "Giriş", quantity: "+100 m³", date: "13.11.2024" },
                { product: "Tuğla", type: "Çıkış", quantity: "-1500 adet", date: "12.11.2024" },
              ].map((movement, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{movement.product}</p>
                    <p className="text-sm text-muted-foreground">{movement.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${movement.type === "Giriş" ? "text-green-600" : "text-red-600"}`}>
                      {movement.quantity}
                    </p>
                    <Badge variant={movement.type === "Giriş" ? "default" : "secondary"}>{movement.type}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Fatura Modülü
  const InvoicesContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Fatura Yönetimi</h2>
          <p className="text-muted-foreground">Satış ve alış faturalarını yönetin</p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Yeni Fatura
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Ay Satış</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺1.8M</div>
            <p className="text-xs text-muted-foreground">45 fatura</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Ay Alış</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺1.2M</div>
            <p className="text-xs text-muted-foreground">32 fatura</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bekleyen Ödemeler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺450K</div>
            <p className="text-xs text-muted-foreground">12 fatura</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Vadesi Geçen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₺125K</div>
            <p className="text-xs text-muted-foreground">5 fatura</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Son Faturalar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                no: "SAT-2024-001",
                customer: "ABC İnşaat",
                amount: "₺125,000",
                date: "15.11.2024",
                type: "Satış",
                status: "Ödendi",
              },
              {
                no: "ALI-2024-045",
                supplier: "XYZ Malzeme",
                amount: "₺89,500",
                date: "14.11.2024",
                type: "Alış",
                status: "Bekliyor",
              },
              {
                no: "SAT-2024-002",
                customer: "Kaya Yapı",
                amount: "₺156,000",
                date: "13.11.2024",
                type: "Satış",
                status: "Vadeli",
              },
              {
                no: "ALI-2024-046",
                supplier: "Demir Çelik",
                amount: "₺75,000",
                date: "12.11.2024",
                type: "Alış",
                status: "Ödendi",
              },
            ].map((invoice, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{invoice.no}</p>
                  <p className="text-sm text-muted-foreground">
                    {invoice.customer || invoice.supplier} • {invoice.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{invoice.amount}</p>
                  <div className="flex gap-2">
                    <Badge variant={invoice.type === "Satış" ? "default" : "secondary"}>{invoice.type}</Badge>
                    <Badge
                      variant={
                        invoice.status === "Ödendi"
                          ? "default"
                          : invoice.status === "Vadeli"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Talep Takibi Modülü
  const RequestsContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Talep Takibi</h2>
          <p className="text-muted-foreground">Satın alma ve malzeme taleplerini yönetin</p>
        </div>
        <Button>
          <ClipboardList className="mr-2 h-4 w-4" />
          Yeni Talep
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Açık Talepler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">onay bekliyor</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Ay Onaylanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">₺650K değerinde</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Acil Talepler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">5</div>
            <p className="text-xs text-muted-foreground">hemen gerekli</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Ortalama Süre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2</div>
            <p className="text-xs text-muted-foreground">gün onay süresi</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Talep Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "TAL-2024-001",
                requester: "Ahmet Yılmaz",
                item: "Çimento 42.5 - 100 ton",
                project: "Konya Rezidans",
                priority: "Normal",
                status: "Onay Bekliyor",
                date: "15.11.2024",
              },
              {
                id: "TAL-2024-002",
                requester: "Mehmet Kaya",
                item: "Demir 16mm - 50 ton",
                project: "Ankara Plaza",
                priority: "Acil",
                status: "Onaylandı",
                date: "14.11.2024",
              },
              {
                id: "TAL-2024-003",
                requester: "Ali Demir",
                item: "Kum - 200 m³",
                project: "İstanbul Towers",
                priority: "Normal",
                status: "Sipariş Verildi",
                date: "13.11.2024",
              },
              {
                id: "TAL-2024-004",
                requester: "Fatma Ak",
                item: "Tuğla - 10000 adet",
                project: "Bursa Sitesi",
                priority: "Düşük",
                status: "Teslim Edildi",
                date: "12.11.2024",
              },
            ].map((request, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium">{request.id}</p>
                      <p className="text-sm text-muted-foreground">{request.item}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-2 text-sm text-muted-foreground">
                    <span>{request.requester}</span>
                    <span>{request.project}</span>
                    <span>{request.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex gap-2 mb-2">
                    <Badge
                      variant={
                        request.priority === "Acil"
                          ? "destructive"
                          : request.priority === "Normal"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {request.priority}
                    </Badge>
                  </div>
                  <Badge
                    variant={
                      request.status === "Teslim Edildi"
                        ? "default"
                        : request.status === "Onaylandı"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {request.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Kasa Modülü
  const CashContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Kasa Yönetimi</h2>
          <p className="text-muted-foreground">Nakit giriş-çıkış işlemlerini takip edin</p>
        </div>
        <Button>
          <Wallet className="mr-2 h-4 w-4" />
          Yeni İşlem
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Kasa Bakiyesi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺125,450</div>
            <p className="text-xs text-muted-foreground">mevcut nakit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Gün Giriş</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₺45,000</div>
            <p className="text-xs text-muted-foreground">8 işlem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Gün Çıkış</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₺32,500</div>
            <p className="text-xs text-muted-foreground">12 işlem</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Net Hareket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+₺12,500</div>
            <p className="text-xs text-muted-foreground">bugün</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Son İşlemler</CardTitle>
            <CardDescription>Bugünkü kasa hareketleri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { description: "Müşteri ödemesi - ABC İnşaat", amount: "+₺25,000", time: "14:30", type: "Giriş" },
                { description: "Yakıt gideri", amount: "-₺1,500", time: "13:15", type: "Çıkış" },
                { description: "Malzeme ödemesi", amount: "-₺15,000", time: "11:45", type: "Çıkış" },
                { description: "Hakediş ödemesi", amount: "+₺20,000", time: "10:20", type: "Giriş" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.time}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${transaction.type === "Giriş" ? "text-green-600" : "text-red-600"}`}>
                      {transaction.amount}
                    </p>
                    <Badge variant={transaction.type === "Giriş" ? "default" : "destructive"}>{transaction.type}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Haftalık Özet</CardTitle>
            <CardDescription>Son 7 günün kasa hareketi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "Pazartesi", income: "₺35,000", expense: "₺28,000", net: "+₺7,000" },
                { day: "Salı", income: "₺42,000", expense: "₺31,000", net: "+₺11,000" },
                { day: "Çarşamba", income: "₺38,000", expense: "₺45,000", net: "-₺7,000" },
                { day: "Perşembe", income: "₺51,000", expense: "₺29,000", net: "+₺22,000" },
                { day: "Cuma", income: "₺45,000", expense: "₺32,500", net: "+₺12,500" },
              ].map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{day.day}</p>
                    <p className="text-sm text-muted-foreground">
                      G: {day.income} | Ç: {day.expense}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${day.net.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                      {day.net}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Banka Modülü
  const BankContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Banka Yönetimi</h2>
          <p className="text-muted-foreground">Banka hesapları ve işlemlerini yönetin</p>
        </div>
        <Button>
          <CreditCard className="mr-2 h-4 w-4" />
          Yeni İşlem
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { bank: "Ziraat Bankası", account: "TR12 0001 0012 3456 7890 12", balance: "₺850,000", type: "Vadesiz" },
          { bank: "İş Bankası", account: "TR34 0006 4000 0011 2345 6789", balance: "₺1,200,000", type: "Vadeli" },
          { bank: "Garanti BBVA", account: "TR56 0006 2000 0000 1234 5678", balance: "₺450,000", type: "Vadesiz" },
          { bank: "Akbank", account: "TR78 0004 6000 0000 0123 4567", balance: "₺320,000", type: "Kredi" },
        ].map((account, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{account.bank}</CardTitle>
              <CardDescription className="text-xs">{account.account}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{account.balance}</div>
              <Badge
                variant={account.type === "Vadeli" ? "default" : account.type === "Kredi" ? "destructive" : "secondary"}
              >
                {account.type}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Son Banka İşlemleri</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                bank: "Ziraat Bankası",
                description: "Müşteri ödemesi - ABC İnşaat",
                amount: "+₺125,000",
                date: "15.11.2024",
                type: "Gelen Havale",
              },
              {
                bank: "İş Bankası",
                description: "Tedarikçi ödemesi - XYZ Malzeme",
                amount: "-₺89,500",
                date: "14.11.2024",
                type: "Giden Havale",
              },
              {
                bank: "Garanti BBVA",
                description: "Maaş ödemeleri",
                amount: "-₺156,000",
                date: "13.11.2024",
                type: "Toplu Ödeme",
              },
              {
                bank: "Akbank",
                description: "Kredi faiz ödemesi",
                amount: "-₺12,500",
                date: "12.11.2024",
                type: "Faiz",
              },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.bank} • {transaction.date}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold text-lg ${transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                  >
                    {transaction.amount}
                  </p>
                  <Badge variant={transaction.amount.startsWith("+") ? "default" : "secondary"}>
                    {transaction.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Çek-Senet Modülü
  const ChecksContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Çek-Senet Yönetimi</h2>
          <p className="text-muted-foreground">Çek ve senet işlemlerini takip edin</p>
        </div>
        <Button>
          <Receipt className="mr-2 h-4 w-4" />
          Yeni Çek/Senet
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Portföydeki Çekler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺485,000</div>
            <p className="text-xs text-muted-foreground">12 adet çek</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Verilen Çekler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺320,000</div>
            <p className="text-xs text-muted-foreground">8 adet çek</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Hafta Vadesi Gelen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">₺125,000</div>
            <p className="text-xs text-muted-foreground">5 adet</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Vadesi Geçen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₺45,000</div>
            <p className="text-xs text-muted-foreground">2 adet</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Alınan Çek/Senetler</CardTitle>
            <CardDescription>Müşterilerden alınan çek ve senetler</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  no: "123456789",
                  customer: "ABC İnşaat",
                  amount: "₺125,000",
                  dueDate: "20.11.2024",
                  type: "Çek",
                  status: "Portföyde",
                },
                {
                  no: "987654321",
                  customer: "Kaya Yapı",
                  amount: "₺89,500",
                  dueDate: "25.11.2024",
                  type: "Senet",
                  status: "Portföyde",
                },
                {
                  no: "456789123",
                  customer: "Demir İnşaat",
                  amount: "₺156,000",
                  dueDate: "18.11.2024",
                  type: "Çek",
                  status: "Vadesi Yakın",
                },
                {
                  no: "789123456",
                  customer: "Yılmaz Yapı",
                  amount: "₺75,000",
                  dueDate: "10.11.2024",
                  type: "Senet",
                  status: "Vadesi Geçti",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{item.no}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.customer} • {item.dueDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{item.amount}</p>
                    <div className="flex gap-1">
                      <Badge variant="outline">{item.type}</Badge>
                      <Badge
                        variant={
                          item.status === "Portföyde"
                            ? "default"
                            : item.status === "Vadesi Yakın"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verilen Çek/Senetler</CardTitle>
            <CardDescription>Tedarikçilere verilen çek ve senetler</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  no: "111222333",
                  supplier: "XYZ Malzeme",
                  amount: "₺95,000",
                  dueDate: "22.11.2024",
                  type: "Çek",
                  status: "Tedavülde",
                },
                {
                  no: "444555666",
                  supplier: "Demir Çelik",
                  amount: "₺67,500",
                  dueDate: "28.11.2024",
                  type: "Senet",
                  status: "Tedavülde",
                },
                {
                  no: "777888999",
                  supplier: "Kum Çakıl",
                  amount: "₺123,000",
                  dueDate: "15.11.2024",
                  type: "Çek",
                  status: "Vadesi Yakın",
                },
                {
                  no: "000111222",
                  supplier: "Tuğla San.",
                  amount: "₺34,500",
                  dueDate: "08.11.2024",
                  type: "Senet",
                  status: "Karşılandı",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{item.no}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.supplier} • {item.dueDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{item.amount}</p>
                    <div className="flex gap-1">
                      <Badge variant="outline">{item.type}</Badge>
                      <Badge
                        variant={
                          item.status === "Tedavülde"
                            ? "default"
                            : item.status === "Vadesi Yakın"
                              ? "secondary"
                              : item.status === "Karşılandı"
                                ? "default"
                                : "destructive"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Muhasebe Modülü
  const AccountingContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Muhasebe</h2>
          <p className="text-muted-foreground">Muhasebe kayıtları ve mali raporlar</p>
        </div>
        <Button>
          <Calculator className="mr-2 h-4 w-4" />
          Yeni Kayıt
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Ay Gelir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₺1,850,000</div>
            <p className="text-xs text-muted-foreground">+15% geçen aya göre</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Ay Gider</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₺1,320,000</div>
            <p className="text-xs text-muted-foreground">+8% geçen aya göre</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Net Kar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₺530,000</div>
            <p className="text-xs text-muted-foreground">%28.6 kar marjı</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">KDV Borcu</CardHeader>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">₺95,400</div>
            <p className="text-xs text-muted-foreground">bu ay ödenecek</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Son Muhasebe Kayıtları</CardTitle>
            <CardDescription>Bu haftaki muhasebe işlemleri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  account: "120 Alıcılar",
                  description: "ABC İnşaat fatura",
                  debit: "₺125,000",
                  credit: "-",
                  date: "15.11.2024",
                },
                {
                  account: "600 Yurt İçi Satışlar",
                  description: "Satış faturası",
                  debit: "-",
                  credit: "₺125,000",
                  date: "15.11.2024",
                },
                {
                  account: "320 Satıcılar",
                  description: "XYZ Malzeme fatura",
                  debit: "-",
                  credit: "₺89,500",
                  date: "14.11.2024",
                },
                {
                  account: "153 Ticari Mallar",
                  description: "Malzeme alımı",
                  debit: "₺89,500",
                  credit: "-",
                  date: "14.11.2024",
                },
              ].map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded">
                  <div className="flex-1">
                    <p className="font-medium">{entry.account}</p>
                    <p className="text-sm text-muted-foreground">{entry.description}</p>
                    <p className="text-xs text-muted-foreground">{entry.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Borç</p>
                        <p className="font-medium">{entry.debit}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Alacak</p>
                        <p className="font-medium">{entry.credit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hesap Planı Özeti</CardTitle>
            <CardDescription>Ana hesap grupları bakiyeleri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { group: "100 Kasa ve Bankalar", balance: "₺1,295,450", type: "Aktif" },
                { group: "120 Alıcılar", balance: "₺1,200,000", type: "Aktif" },
                { group: "153 Ticari Mallar", balance: "₺2,800,000", type: "Aktif" },
                { group: "320 Satıcılar", balance: "₺850,000", type: "Pasif" },
                { group: "600 Yurt İçi Satışlar", balance: "₺1,850,000", type: "Gelir" },
                { group: "770 Genel Giderler", balance: "₺320,000", type: "Gider" },
              ].map((account, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{account.group}</p>
                    <Badge variant="outline">{account.type}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{account.balance}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Sabit Kıymet Modülü
  const AssetsContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sabit Kıymet</h2>
          <p className="text-muted-foreground">Sabit kıymetler ve amortisman yönetimi</p>
        </div>
        <Button>
          <Building className="mr-2 h-4 w-4" />
          Yeni Kıymet
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Toplam Kıymet</CardHeader>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺8.5M</div>
            <p className="text-xs text-muted-foreground">maliyet değeri</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Net Defter Değeri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺6.2M</div>
            <p className="text-xs text-muted-foreground">amortisman sonrası</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Yıl Amortisman</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺450,000</div>
            <p className="text-xs text-muted-foreground">11 aylık toplam</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bu Ay Amortisman</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺41,000</div>
            <p className="text-xs text-muted-foreground">kasım ayı</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sabit Kıymet Listesi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Ofis Binası",
                category: "Binalar",
                cost: "₺3,500,000",
                depreciation: "₺875,000",
                netValue: "₺2,625,000",
                rate: "%5",
                purchaseDate: "01.01.2019",
              },
              {
                name: "Vinç - Liebherr 150",
                category: "Makine ve Teçhizat",
                cost: "₺2,800,000",
                depreciation: "₺1,120,000",
                netValue: "₺1,680,000",
                rate: "%20",
                purchaseDate: "15.03.2020",
              },
              {
                name: "Kamyon - Mercedes 3535",
                category: "Taşıt Araçları",
                cost: "₺850,000",
                depreciation: "₺425,000",
                netValue: "₺425,000",
                rate: "%20",
                purchaseDate: "10.06.2021",
              },
              {
                name: "Bilgisayar ve Yazılımlar",
                category: "Demirbaş",
                cost: "₺125,000",
                depreciation: "₺100,000",
                netValue: "₺25,000",
                rate: "%33",
                purchaseDate: "20.09.2020",
              },
            ].map((asset, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-sm text-muted-foreground">{asset.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-2 text-sm text-muted-foreground">
                    <span>Alım: {asset.purchaseDate}</span>
                    <span>Oran: {asset.rate}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Maliyet</p>
                      <p className="font-medium">{asset.cost}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Amortisman</p>
                      <p className="font-medium text-red-600">{asset.depreciation}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Net Değer</p>
                      <p className="font-bold">{asset.netValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // ReportsContent fonksiyonunu şu şekilde değiştir:

  const ReportsContent = () => {
    // Veri kaynakları ve alanları
    const dataSources = {
      projects: {
        name: "Projeler",
        fields: [
          { key: "name", label: "Proje Adı", type: "text" },
          { key: "progress", label: "İlerleme (%)", type: "number" },
          { key: "budget", label: "Bütçe", type: "currency" },
          { key: "location", label: "Lokasyon", type: "text" },
          { key: "contractor", label: "Ana Taşeron", type: "text" },
          { key: "status", label: "Durum", type: "text" },
          { key: "startDate", label: "Başlangıç Tarihi", type: "date" },
          { key: "endDate", label: "Bitiş Tarihi", type: "date" },
        ],
        data: [
          {
            name: "Konya Rezidans",
            progress: 75,
            budget: 850000,
            location: "Konya",
            contractor: "Mehmet İnşaat",
            status: "Devam Ediyor",
            startDate: "2024-03-01",
            endDate: "2024-12-15",
          },
          {
            name: "Ankara Plaza",
            progress: 45,
            budget: 1200000,
            location: "Ankara",
            contractor: "Yılmaz Yapı",
            status: "Devam Ediyor",
            startDate: "2024-05-15",
            endDate: "2025-03-30",
          },
          {
            name: "İstanbul Towers",
            progress: 90,
            budget: 2100000,
            location: "İstanbul",
            contractor: "Demir İnşaat",
            status: "Son Aşama",
            startDate: "2024-01-10",
            endDate: "2024-11-20",
          },
          {
            name: "Bursa Sitesi",
            progress: 30,
            budget: 650000,
            location: "Bursa",
            contractor: "Kaya İnşaat",
            status: "Başlangıç",
            startDate: "2024-08-01",
            endDate: "2025-06-15",
          },
        ],
      },
      hakedis: {
        name: "Hakediş",
        fields: [
          { key: "id", label: "Hakediş No", type: "text" },
          { key: "contractor", label: "Taşeron", type: "text" },
          { key: "project", label: "Proje", type: "text" },
          { key: "amount", label: "Tutar", type: "currency" },
          { key: "date", label: "Tarih", type: "date" },
          { key: "status", label: "Durum", type: "text" },
        ],
        data: [
          {
            id: "HAK-2024-001",
            contractor: "Mehmet İnşaat",
            project: "Konya Rezidans",
            amount: 125000,
            date: "2024-11-15",
            status: "Onaylandı",
          },
          {
            id: "HAK-2024-002",
            contractor: "Yılmaz Yapı",
            project: "Ankara Plaza",
            amount: 89500,
            date: "2024-11-12",
            status: "Ödendi",
          },
          {
            id: "HAK-2024-003",
            contractor: "Demir İnşaat",
            project: "İstanbul Towers",
            amount: 156000,
            date: "2024-11-10",
            status: "Bekliyor",
          },
          {
            id: "HAK-2024-004",
            contractor: "Kaya İnşaat",
            project: "Bursa Sitesi",
            amount: 75000,
            date: "2024-11-08",
            status: "Ödendi",
          },
        ],
      },
      inventory: {
        name: "Stok",
        fields: [
          { key: "name", label: "Ürün Adı", type: "text" },
          { key: "category", label: "Kategori", type: "text" },
          { key: "current", label: "Mevcut Miktar", type: "number" },
          { key: "minimum", label: "Minimum Seviye", type: "number" },
          { key: "unit", label: "Birim", type: "text" },
          { key: "value", label: "Değer", type: "currency" },
        ],
        data: [
          { name: "Çimento 42.5", category: "Bağlayıcı", current: 15, minimum: 50, unit: "ton", value: 45000 },
          { name: "Demir 12mm", category: "Demir", current: 8, minimum: 20, unit: "ton", value: 64000 },
          { name: "Tuğla", category: "Duvar", current: 2500, minimum: 5000, unit: "adet", value: 12500 },
          { name: "Kum", category: "Agrega", current: 12, minimum: 30, unit: "m³", value: 3600 },
        ],
      },
      customers: {
        name: "Cari Hesap",
        fields: [
          { key: "name", label: "Cari Adı", type: "text" },
          { key: "type", label: "Tip", type: "text" },
          { key: "balance", label: "Bakiye", type: "currency" },
          { key: "status", label: "Durum", type: "text" },
        ],
        data: [
          { name: "ABC İnşaat Ltd.", type: "Müşteri", balance: 125000, status: "Alacak" },
          { name: "XYZ Malzeme A.Ş.", type: "Tedarikçi", balance: -89500, status: "Borç" },
          { name: "Demir Çelik San.", type: "Tedarikçi", balance: -156000, status: "Borç" },
          { name: "Kaya Yapı Ltd.", type: "Müşteri", balance: 75000, status: "Alacak" },
        ],
      },
      invoices: {
        name: "Faturalar",
        fields: [
          { key: "no", label: "Fatura No", type: "text" },
          { key: "customer", label: "Müşteri/Tedarikçi", type: "text" },
          { key: "amount", label: "Tutar", type: "currency" },
          { key: "date", label: "Tarih", type: "date" },
          { key: "type", label: "Tip", type: "text" },
          { key: "status", label: "Durum", type: "text" },
        ],
        data: [
          {
            no: "SAT-2024-001",
            customer: "ABC İnşaat",
            amount: 125000,
            date: "2024-11-15",
            type: "Satış",
            status: "Ödendi",
          },
          {
            no: "ALI-2024-045",
            customer: "XYZ Malzeme",
            amount: 89500,
            date: "2024-11-14",
            type: "Alış",
            status: "Bekliyor",
          },
          {
            no: "SAT-2024-002",
            customer: "Kaya Yapı",
            amount: 156000,
            date: "2024-11-13",
            type: "Satış",
            status: "Vadeli",
          },
          {
            no: "ALI-2024-046",
            customer: "Demir Çelik",
            amount: 75000,
            date: "2024-11-12",
            type: "Alış",
            status: "Ödendi",
          },
        ],
      },
    }

    // Grafik türleri
    const chartTypes = [
      { value: "bar", label: "Bar Grafik", icon: "📊" },
      { value: "line", label: "Çizgi Grafik", icon: "📈" },
      { value: "pie", label: "Pasta Grafik", icon: "🥧" },
      { value: "area", label: "Alan Grafik", icon: "📉" },
      { value: "table", label: "Tablo", icon: "📋" },
    ]

    const [selectedDataSource, setSelectedDataSource] = useState("projects")
    const [selectedFields, setSelectedFields] = useState([])
    const [chartType, setChartType] = useState("bar")
    const [filters, setFilters] = useState({})
    const [groupBy, setGroupBy] = useState("")
    const [savedReports, setSavedReports] = useState([])
    const [reportName, setReportName] = useState("")
    const [showPreview, setShowPreview] = useState(false)
    const [activeTab, setActiveTab] = useState("summary") // Yeni state
    const [summaryChartTypes, setSummaryChartTypes] = useState({
      cashFlow: "line",
      receivables: "pie",
      revenue: "bar",
      projects: "area",
    })

    // Mali durum verileri
    const financialData = {
      summary: {
        totalAssets: 15750000,
        totalLiabilities: 8950000,
        equity: 6800000,
        cashAndBank: 2820450,
        receivables: 1200000,
        payables: 850000,
        loans: 3200000,
        monthlyRevenue: 1850000,
        monthlyExpense: 1320000,
        netProfit: 530000,
      },
      cashFlow: [
        { month: "Ocak", income: 1650000, expense: 1200000, net: 450000 },
        { month: "Şubat", income: 1750000, expense: 1250000, net: 500000 },
        { month: "Mart", income: 1850000, expense: 1300000, net: 550000 },
        { month: "Nisan", income: 1950000, expense: 1350000, net: 600000 },
        { month: "Mayıs", income: 1800000, expense: 1280000, net: 520000 },
        { month: "Haziran", income: 1900000, expense: 1320000, net: 580000 },
        { month: "Temmuz", income: 2100000, expense: 1400000, net: 700000 },
        { month: "Ağustos", income: 1950000, expense: 1350000, net: 600000 },
        { month: "Eylül", income: 1850000, expense: 1300000, net: 550000 },
        { month: "Ekim", income: 1750000, expense: 1250000, net: 500000 },
        { month: "Kasım", income: 1850000, expense: 1320000, net: 530000 },
      ],
      receivablesBreakdown: [
        { name: "0-30 Gün", value: 450000, color: "#10B981" },
        { name: "31-60 Gün", value: 350000, color: "#F59E0B" },
        { name: "61-90 Gün", value: 250000, color: "#EF4444" },
        { name: "90+ Gün", value: 150000, color: "#DC2626" },
      ],
      projectProfitability: [
        { name: "Konya Rezidans", budget: 850000, spent: 637500, profit: 212500, margin: 25 },
        { name: "Ankara Plaza", budget: 1200000, spent: 660000, profit: 540000, margin: 45 },
        { name: "İstanbul Towers", budget: 2100000, spent: 1890000, profit: 210000, margin: 10 },
        { name: "Bursa Sitesi", budget: 650000, spent: 195000, profit: 455000, margin: 70 },
      ],
      bankAccounts: [
        { bank: "Ziraat Bankası", balance: 850000, type: "Vadesiz", rate: 0 },
        { bank: "İş Bankası", balance: 1200000, type: "Vadeli", rate: 25 },
        { bank: "Garanti BBVA", balance: 450000, type: "Vadesiz", rate: 0 },
        { bank: "Akbank", balance: -320000, type: "Kredi", rate: 35 },
      ],
      upcomingPayments: [
        { type: "Çek", amount: 125000, dueDate: "20.11.2024", days: 5 },
        { type: "Senet", amount: 89500, dueDate: "25.11.2024", days: 10 },
        { type: "Kredi Taksit", amount: 45000, dueDate: "30.11.2024", days: 15 },
        { type: "Maaş", amount: 156000, dueDate: "01.12.2024", days: 16 },
      ],
    }

    // Grafik türü değiştirme fonksiyonu
    const toggleChartType = (chartKey, currentType) => {
      const types = ["bar", "line", "pie", "area"]
      const currentIndex = types.indexOf(currentType)
      const nextIndex = (currentIndex + 1) % types.length
      setSummaryChartTypes((prev) => ({
        ...prev,
        [chartKey]: types[nextIndex],
      }))
    }

    // Mali Özet Sayfası
    const FinancialSummary = () => (
      <div className="space-y-6">
        {/* Ana KPI Kartları */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Toplam Varlık</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₺{(financialData.summary.totalAssets / 1000000).toFixed(1)}M</div>
              <p className="text-xs opacity-75">Aktif toplamı</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Nakit + Banka</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₺{(financialData.summary.cashAndBank / 1000000).toFixed(1)}M</div>
              <p className="text-xs opacity-75">Likit varlıklar</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Net Alacak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₺{((financialData.summary.receivables - financialData.summary.payables) / 1000).toFixed(0)}K
              </div>
              <p className="text-xs opacity-75">Alacak - Borç</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Bu Ay Kar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₺{(financialData.summary.netProfit / 1000).toFixed(0)}K</div>
              <p className="text-xs opacity-75">
                %{((financialData.summary.netProfit / financialData.summary.monthlyRevenue) * 100).toFixed(1)} marj
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detaylı Mali Durum */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bilanço Özeti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-medium text-green-800">Toplam Varlık</span>
                  <span className="font-bold text-green-800">
                    ₺{(financialData.summary.totalAssets / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                  <span className="font-medium text-red-800">Toplam Borç</span>
                  <span className="font-bold text-red-800">
                    ₺{(financialData.summary.totalLiabilities / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span className="font-medium text-blue-800">Öz Sermaye</span>
                  <span className="font-bold text-blue-800">
                    ₺{(financialData.summary.equity / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Borç/Varlık Oranı</span>
                    <span className="font-medium">
                      %{((financialData.summary.totalLiabilities / financialData.summary.totalAssets) * 100).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Likidite Durumu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Kasa</span>
                  <span className="font-medium">₺125K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Ziraat Bankası</span>
                  <span className="font-medium">₺850K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">İş Bankası</span>
                  <span className="font-medium">₺1.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Garanti BBVA</span>
                  <span className="font-medium">₺450K</span>
                </div>
                <div className="flex justify-between items-center text-red-600">
                  <span className="text-sm">Akbank (Kredi)</span>
                  <span className="font-medium">-₺320K</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Net Likidite</span>
                    <span className="font-bold text-green-600">₺2.3M</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Yaklaşan Ödemeler</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {financialData.upcomingPayments.map((payment, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border rounded">
                    <div>
                      <p className="text-sm font-medium">{payment.type}</p>
                      <p className="text-xs text-muted-foreground">{payment.dueDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₺{(payment.amount / 1000).toFixed(0)}K</p>
                      <p
                        className={`text-xs ${payment.days <= 7 ? "text-red-600" : payment.days <= 15 ? "text-orange-600" : "text-green-600"}`}
                      >
                        {payment.days} gün
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grafikler */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Nakit Akış Grafiği */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Aylık Nakit Akışı</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleChartType("cashFlow", summaryChartTypes.cashFlow)}
                >
                  {summaryChartTypes.cashFlow === "line"
                    ? "📈"
                    : summaryChartTypes.cashFlow === "bar"
                      ? "📊"
                      : summaryChartTypes.cashFlow === "area"
                        ? "📉"
                        : "🥧"}
                </Button>
              </div>
              <CardDescription>Gelir, gider ve net kar trendi</CardDescription>
            </CardHeader>
            <CardContent>
              {summaryChartTypes.cashFlow === "line" && (
                <LineChart width={500} height={300} data={financialData.cashFlow}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₺${(value / 1000).toFixed(0)}K`} />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="#10B981" name="Gelir" />
                  <Line type="monotone" dataKey="expense" stroke="#EF4444" name="Gider" />
                  <Line type="monotone" dataKey="net" stroke="#3B82F6" name="Net Kar" strokeWidth={3} />
                </LineChart>
              )}
              {summaryChartTypes.cashFlow === "bar" && (
                <BarChart width={500} height={300} data={financialData.cashFlow}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₺${(value / 1000).toFixed(0)}K`} />
                  <Legend />
                  <Bar dataKey="income" fill="#10B981" name="Gelir" />
                  <Bar dataKey="expense" fill="#EF4444" name="Gider" />
                  <Bar dataKey="net" fill="#3B82F6" name="Net Kar" />
                </BarChart>
              )}
              {summaryChartTypes.cashFlow === "area" && (
                <AreaChart width={500} height={300} data={financialData.cashFlow}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₺${(value / 1000).toFixed(0)}K`} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="income"
                    stackId="1"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.6}
                    name="Gelir"
                  />
                  <Area
                    type="monotone"
                    dataKey="expense"
                    stackId="2"
                    stroke="#EF4444"
                    fill="#EF4444"
                    fillOpacity={0.6}
                    name="Gider"
                  />
                </AreaChart>
              )}
            </CardContent>
          </Card>

          {/* Alacak Yaşlandırma */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Alacak Yaşlandırma</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleChartType("receivables", summaryChartTypes.receivables)}
                >
                  {summaryChartTypes.receivables === "pie"
                    ? "🥧"
                    : summaryChartTypes.receivables === "bar"
                      ? "📊"
                      : "📈"}
                </Button>
              </div>
              <CardDescription>Alacakların vade dağılımı</CardDescription>
            </CardHeader>
            <CardContent>
              {summaryChartTypes.receivables === "pie" && (
                <PieChart width={500} height={300}>
                  <Pie
                    data={financialData.receivablesBreakdown}
                    cx={250}
                    cy={150}
                    labelLine={false}
                    label={({ name, value }) => `${name}: ₺${(value / 1000).toFixed(0)}K`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {financialData.receivablesBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₺${(value / 1000).toFixed(0)}K`} />
                </PieChart>
              )}
              {summaryChartTypes.receivables === "bar" && (
                <BarChart width={500} height={300} data={financialData.receivablesBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₺${(value / 1000).toFixed(0)}K`} />
                  <Bar dataKey="value" fill="#3B82F6" />
                </BarChart>
              )}
            </CardContent>
          </Card>

          {/* Proje Karlılık */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Proje Karlılık Analizi</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleChartType("projects", summaryChartTypes.projects)}
                >
                  {summaryChartTypes.projects === "bar" ? "📊" : summaryChartTypes.projects === "line" ? "📈" : "📉"}
                </Button>
              </div>
              <CardDescription>Proje bazlı kar marjları</CardDescription>
            </CardHeader>
            <CardContent>
              {summaryChartTypes.projects === "bar" && (
                <BarChart width={500} height={300} data={financialData.projectProfitability}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "margin" ? `%${value}` : `₺${(value / 1000).toFixed(0)}K`,
                      name === "budget" ? "Bütçe" : name === "spent" ? "Harcanan" : name === "profit" ? "Kar" : "Marj",
                    ]}
                  />
                  <Legend />
                  <Bar dataKey="budget" fill="#94A3B8" name="Bütçe" />
                  <Bar dataKey="spent" fill="#EF4444" name="Harcanan" />
                  <Bar dataKey="profit" fill="#10B981" name="Kar" />
                </BarChart>
              )}
              {summaryChartTypes.projects === "line" && (
                <LineChart width={500} height={300} data={financialData.projectProfitability}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="margin" stroke="#3B82F6" name="Kar Marjı (%)" strokeWidth={3} />
                </LineChart>
              )}
            </CardContent>
          </Card>

          {/* Finansal Oranlar */}
          <Card>
            <CardHeader>
              <CardTitle>Finansal Oranlar</CardTitle>
              <CardDescription>Şirket performans göstergeleri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <div>
                    <p className="font-medium text-blue-800">Cari Oran</p>
                    <p className="text-xs text-blue-600">Dönen Varlık / Kısa Vadeli Borç</p>
                  </div>
                  <span className="text-xl font-bold text-blue-800">2.8</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <div>
                    <p className="font-medium text-green-800">Asit-Test Oranı</p>
                    <p className="text-xs text-green-600">Likit Varlık / Kısa Vadeli Borç</p>
                  </div>
                  <span className="text-xl font-bold text-green-800">2.1</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <div>
                    <p className="font-medium text-purple-800">Öz Sermaye Oranı</p>
                    <p className="text-xs text-purple-600">Öz Sermaye / Toplam Varlık</p>
                  </div>
                  <span className="text-xl font-bold text-purple-800">%43.2</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                  <div>
                    <p className="font-medium text-orange-800">Net Kar Marjı</p>
                    <p className="text-xs text-orange-600">Net Kar / Net Satış</p>
                  </div>
                  <span className="text-xl font-bold text-orange-800">%28.6</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk Analizi */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Analizi ve Uyarılar</CardTitle>
            <CardDescription>Dikkat edilmesi gereken finansal durumlar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 border-l-4 border-red-500 bg-red-50">
                <h4 className="font-medium text-red-800">Yüksek Risk</h4>
                <ul className="mt-2 text-sm text-red-700 space-y-1">
                  <li>• 90+ gün vadesi geçen alacak: ₺150K</li>
                  <li>• 5 gün içinde ödenecek çek: ₺125K</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                <h4 className="font-medium text-yellow-800">Orta Risk</h4>
                <ul className="mt-2 text-sm text-yellow-700 space-y-1">
                  <li>• 61-90 gün vadeli alacak: ₺250K</li>
                  <li>• Kredi kullanım oranı: %75</li>
                </ul>
              </div>

              <div className="p-4 border-l-4 border-green-500 bg-green-50">
                <h4 className="font-medium text-green-800">Düşük Risk</h4>
                <ul className="mt-2 text-sm text-green-700 space-y-1">
                  <li>• Güçlü nakit pozisyonu</li>
                  <li>• Sağlıklı kar marjları</li>
                  <li>• İyi likidite oranları</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )

    // Veri işleme fonksiyonu
    const processData = () => {
      if (!selectedDataSource || selectedFields.length === 0) return []

      let data = dataSources[selectedDataSource].data

      // Filtreleme
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          data = data.filter((item) => String(item[key]).toLowerCase().includes(String(filters[key]).toLowerCase()))
        }
      })

      // Gruplama
      if (groupBy) {
        const grouped = data.reduce((acc, item) => {
          const key = item[groupBy]
          if (!acc[key]) acc[key] = []
          acc[key].push(item)
          return acc
        }, {})

        data = Object.keys(grouped).map((key) => ({
          [groupBy]: key,
          count: grouped[key].length,
          ...selectedFields.reduce((acc, field) => {
            if (field !== groupBy) {
              const values = grouped[key].map((item) => item[field]).filter((v) => typeof v === "number")
              acc[field] = values.length > 0 ? values.reduce((sum, val) => sum + val, 0) / values.length : 0
            }
            return acc
          }, {}),
        }))
      }

      return data
    }

    // Grafik render fonksiyonu
    const renderChart = () => {
      const data = processData()
      if (data.length === 0) return <div className="text-center text-muted-foreground">Veri bulunamadı</div>

      const chartProps = {
        width: 800,
        height: 400,
        data: data,
        margin: { top: 20, right: 30, left: 20, bottom: 5 },
      }

      switch (chartType) {
        case "bar":
          return (
            <BarChart {...chartProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={selectedFields[0]} />
              <YAxis />
              <Tooltip />
              <Legend />
              {selectedFields.slice(1).map((field, index) => (
                <Bar key={field} dataKey={field} fill={`hsl(${index * 60}, 70%, 50%)`} />
              ))}
            </BarChart>
          )
        case "line":
          return (
            <LineChart {...chartProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={selectedFields[0]} />
              <YAxis />
              <Tooltip />
              <Legend />
              {selectedFields.slice(1).map((field, index) => (
                <Line key={field} type="monotone" dataKey={field} stroke={`hsl(${index * 60}, 70%, 50%)`} />
              ))}
            </LineChart>
          )
        case "pie":
          return (
            <PieChart width={800} height={400}>
              <Pie
                data={data}
                cx={400}
                cy={200}
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey={selectedFields[1]}
                nameKey={selectedFields[0]}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`hsl(${index * 45}, 70%, 50%)`} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )
        case "area":
          return (
            <AreaChart {...chartProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={selectedFields[0]} />
              <YAxis />
              <Tooltip />
              <Legend />
              {selectedFields.slice(1).map((field, index) => (
                <Area
                  key={field}
                  type="monotone"
                  dataKey={field}
                  stackId="1"
                  stroke={`hsl(${index * 60}, 70%, 50%)`}
                  fill={`hsl(${index * 60}, 70%, 50%)`}
                />
              ))}
            </AreaChart>
          )
        case "table":
          return (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    {selectedFields.map((field) => (
                      <th key={field} className="border border-gray-300 px-4 py-2 text-left">
                        {dataSources[selectedDataSource].fields.find((f) => f.key === field)?.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {selectedFields.map((field) => (
                        <td key={field} className="border border-gray-300 px-4 py-2">
                          {typeof row[field] === "number" &&
                          dataSources[selectedDataSource].fields.find((f) => f.key === field)?.type === "currency"
                            ? `₺${row[field].toLocaleString()}`
                            : row[field]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        default:
          return <div>Grafik türü seçiniz</div>
      }
    }

    // Tab sistemi için güncellenmiş return
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Raporlama ve Analiz</h2>
            <p className="text-muted-foreground">Finansal durum ve dinamik raporlar</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setShowPreview(!showPreview)}>
              {showPreview ? "Düzenleme" : "Önizleme"}
            </Button>
            <Button>
              <FileBarChart className="mr-2 h-4 w-4" />
              Raporu Kaydet
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
          <Button
            variant={activeTab === "summary" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("summary")}
          >
            📊 Mali Özet
          </Button>
          <Button
            variant={activeTab === "dynamic" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("dynamic")}
          >
            🎯 Dinamik Raporlar
          </Button>
        </div>

        {/* Tab Content */}
        {activeTab === "summary" ? (
          <FinancialSummary />
        ) : (
          // Dinamik Raporlama İçeriği
          <div className="space-y-6">
            {!showPreview ? (
              <div className="grid gap-6 md:grid-cols-2">
                {/* Sol Panel - Konfigürasyon */}
                <div className="space-y-6">
                  {/* Veri Kaynağı Seçimi */}
                  <Card>
                    <CardHeader>
                      <CardTitle>1. Veri Kaynağı</CardTitle>
                      <CardDescription>Hangi verilerle çalışmak istiyorsunuz?</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.keys(dataSources).map((key) => (
                          <Button
                            key={key}
                            variant={selectedDataSource === key ? "default" : "outline"}
                            onClick={() => {
                              setSelectedDataSource(key)
                              setSelectedFields([])
                              setFilters({})
                              setGroupBy("")
                            }}
                            className="justify-start"
                          >
                            {dataSources[key].name}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Alan Seçimi */}
                  {selectedDataSource && (
                    <Card>
                      <CardHeader>
                        <\
