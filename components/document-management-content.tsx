"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Upload,
  Download,
  Eye,
  Search,
  Building2,
  Users,
  Receipt,
  FileImage,
  FileSpreadsheet,
  File,
} from "lucide-react"

export const DocumentManagementContent = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeOwner, setActiveOwner] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Konya Rezidans Faturası - Kasım 2024.pdf",
      category: "faturalar",
      owner: "company",
      ownerName: "ABC İnşaat",
      project: "Konya Rezidans",
      uploadDate: "2024-11-15",
      size: "2.4 MB",
      type: "pdf",
      tags: ["fatura", "kasım", "konya"],
    },
    {
      id: 2,
      name: "Mehmet İnşaat Hakediş - HAK-2024-001.pdf",
      category: "hakedis",
      owner: "contractor",
      ownerName: "Mehmet İnşaat",
      project: "Konya Rezidans",
      uploadDate: "2024-11-14",
      size: "1.8 MB",
      type: "pdf",
      tags: ["hakediş", "mehmet", "konya"],
    },
    {
      id: 3,
      name: "İş Güvenliği Sertifikası.jpg",
      category: "sertifikalar",
      owner: "contractor",
      ownerName: "Yılmaz Yapı",
      project: "Ankara Plaza",
      uploadDate: "2024-11-13",
      size: "856 KB",
      type: "image",
      tags: ["sertifika", "güvenlik", "yılmaz"],
    },
    {
      id: 4,
      name: "Malzeme Listesi - Kasım.xlsx",
      category: "malzeme",
      owner: "company",
      ownerName: "ABC İnşaat",
      project: "İstanbul Towers",
      uploadDate: "2024-11-12",
      size: "445 KB",
      type: "excel",
      tags: ["malzeme", "liste", "kasım"],
    },
    {
      id: 5,
      name: "Proje Ruhsatı - Bursa Sitesi.pdf",
      category: "ruhsatlar",
      owner: "company",
      ownerName: "ABC İnşaat",
      project: "Bursa Sitesi",
      uploadDate: "2024-11-10",
      size: "3.2 MB",
      type: "pdf",
      tags: ["ruhsat", "bursa", "proje"],
    },
    {
      id: 6,
      name: "Taşeron Sözleşmesi - Demir İnşaat.pdf",
      category: "sozlesmeler",
      owner: "contractor",
      ownerName: "Demir İnşaat",
      project: "İstanbul Towers",
      uploadDate: "2024-11-08",
      size: "1.1 MB",
      type: "pdf",
      tags: ["sözleşme", "demir", "taşeron"],
    },
  ])

  const categories = [
    { id: "all", name: "Tüm Belgeler", icon: FileText, count: documents.length },
    {
      id: "faturalar",
      name: "Faturalar",
      icon: Receipt,
      count: documents.filter((d) => d.category === "faturalar").length,
    },
    { id: "hakedis", name: "Hakediş", icon: FileText, count: documents.filter((d) => d.category === "hakedis").length },
    {
      id: "sozlesmeler",
      name: "Sözleşmeler",
      icon: FileText,
      count: documents.filter((d) => d.category === "sozlesmeler").length,
    },
    {
      id: "ruhsatlar",
      name: "Ruhsatlar",
      icon: FileText,
      count: documents.filter((d) => d.category === "ruhsatlar").length,
    },
    {
      id: "sertifikalar",
      name: "Sertifikalar",
      icon: FileText,
      count: documents.filter((d) => d.category === "sertifikalar").length,
    },
    {
      id: "malzeme",
      name: "Malzeme",
      icon: FileSpreadsheet,
      count: documents.filter((d) => d.category === "malzeme").length,
    },
    {
      id: "teknik",
      name: "Teknik Belgeler",
      icon: FileText,
      count: documents.filter((d) => d.category === "teknik").length,
    },
    { id: "mali", name: "Mali Belgeler", icon: FileText, count: documents.filter((d) => d.category === "mali").length },
    {
      id: "hukuki",
      name: "Hukuki Belgeler",
      icon: FileText,
      count: documents.filter((d) => d.category === "hukuki").length,
    },
    { id: "diger", name: "Diğer", icon: File, count: documents.filter((d) => d.category === "diger").length },
  ]

  const owners = [
    { id: "all", name: "Tümü", icon: Building2 },
    { id: "company", name: "Şirket", icon: Building2 },
    { id: "contractor", name: "Taşeronlar", icon: Users },
  ]

  const projects = [
    { id: "all", name: "Tüm Projeler" },
    { id: "konya", name: "Konya Rezidans" },
    { id: "ankara", name: "Ankara Plaza" },
    { id: "istanbul", name: "İstanbul Towers" },
    { id: "bursa", name: "Bursa Sitesi" },
  ]

  const [selectedProject, setSelectedProject] = useState("all")
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [newDocument, setNewDocument] = useState({
    name: "",
    category: "faturalar",
    owner: "company",
    ownerName: "",
    project: "",
    tags: "",
    file: null,
  })

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-8 w-8 text-red-500" />
      case "image":
        return <FileImage className="h-8 w-8 text-blue-500" />
      case "excel":
        return <FileSpreadsheet className="h-8 w-8 text-green-500" />
      default:
        return <File className="h-8 w-8 text-gray-500" />
    }
  }

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory = activeCategory === "all" || doc.category === activeCategory
    const matchesOwner = activeOwner === "all" || doc.owner === activeOwner
    const matchesProject =
      selectedProject === "all" ||
      doc.project.toLowerCase().includes(projects.find((p) => p.id === selectedProject)?.name.toLowerCase() || "")
    const matchesSearch =
      searchTerm === "" ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      doc.ownerName.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesOwner && matchesProject && matchesSearch
  })

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setNewDocument({
        ...newDocument,
        file: file,
        name: file.name,
      })
    }
  }

  const addDocument = () => {
    if (newDocument.file) {
      const document = {
        id: Date.now(),
        name: newDocument.name,
        category: newDocument.category,
        owner: newDocument.owner,
        ownerName: newDocument.ownerName,
        project: newDocument.project,
        uploadDate: new Date().toISOString().split("T")[0],
        size: `${(newDocument.file.size / 1024).toFixed(1)} KB`,
        type: newDocument.file.type.includes("pdf")
          ? "pdf"
          : newDocument.file.type.includes("image")
            ? "image"
            : newDocument.file.type.includes("sheet")
              ? "excel"
              : "other",
        tags: newDocument.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      }

      setDocuments([document, ...documents])
      setNewDocument({
        name: "",
        category: "faturalar",
        owner: "company",
        ownerName: "",
        project: "",
        tags: "",
        file: null,
      })
      setUploadModalOpen(false)
    }
  }

  const UploadModal = () =>
    uploadModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-96 max-h-[90vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Yeni Belge Yükle</h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Dosya</label>
              <Input type="file" onChange={handleFileUpload} className="mt-1" />
            </div>

            <div>
              <label className="text-sm font-medium">Belge Adı</label>
              <Input
                value={newDocument.name}
                onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
                placeholder="Belge adını girin"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Kategori</label>
              <select
                value={newDocument.category}
                onChange={(e) => setNewDocument({ ...newDocument, category: e.target.value })}
                className="w-full p-2 border rounded mt-1"
              >
                {categories
                  .filter((c) => c.id !== "all")
                  .map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Sahip</label>
              <select
                value={newDocument.owner}
                onChange={(e) => setNewDocument({ ...newDocument, owner: e.target.value })}
                className="w-full p-2 border rounded mt-1"
              >
                <option value="company">Şirket</option>
                <option value="contractor">Taşeron</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">
                {newDocument.owner === "company" ? "Şirket Adı" : "Taşeron Adı"}
              </label>
              <Input
                value={newDocument.ownerName}
                onChange={(e) => setNewDocument({ ...newDocument, ownerName: e.target.value })}
                placeholder={newDocument.owner === "company" ? "Şirket adı" : "Taşeron adı"}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Proje</label>
              <select
                value={newDocument.project}
                onChange={(e) => setNewDocument({ ...newDocument, project: e.target.value })}
                className="w-full p-2 border rounded mt-1"
              >
                <option value="">Proje Seçin</option>
                {projects
                  .filter((p) => p.id !== "all")
                  .map((project) => (
                    <option key={project.id} value={project.name}>
                      {project.name}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Etiketler</label>
              <Input
                value={newDocument.tags}
                onChange={(e) => setNewDocument({ ...newDocument, tags: e.target.value })}
                placeholder="Virgülle ayırın: fatura, kasım, konya"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <Button onClick={addDocument} disabled={!newDocument.file}>
              Yükle
            </Button>
            <Button variant="outline" onClick={() => setUploadModalOpen(false)}>
              İptal
            </Button>
          </div>
        </div>
      </div>
    )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Belge Yönetim Sistemi</h2>
          <p className="text-muted-foreground">Şirket ve taşeron belgelerini kategorize ederek saklayın</p>
        </div>
        <Button onClick={() => setUploadModalOpen(true)}>
          <Upload className="mr-2 h-4 w-4" />
          Belge Yükle
        </Button>
      </div>

      {/* Özet Kartları */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Toplam Belge</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.length}</div>
            <p className="text-xs text-muted-foreground">Tüm belgeler</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Şirket Belgeleri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.filter((d) => d.owner === "company").length}</div>
            <p className="text-xs text-muted-foreground">Şirket belgeleri</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taşeron Belgeleri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.filter((d) => d.owner === "contractor").length}</div>
            <p className="text-xs text-muted-foreground">Taşeron belgeleri</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Bu Ay Yüklenen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {documents.filter((d) => d.uploadDate.startsWith("2024-11")).length}
            </div>
            <p className="text-xs text-muted-foreground">Kasım 2024</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sol Panel - Kategoriler */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Kategoriler</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-between"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4" />
                      {category.name}
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Sahip</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {owners.map((owner) => (
                  <Button
                    key={owner.id}
                    variant={activeOwner === owner.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveOwner(owner.id)}
                  >
                    <owner.icon className="mr-2 h-4 w-4" />
                    {owner.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sağ Panel - Belgeler */}
        <div className="lg:col-span-3">
          {/* Filtreler */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Belge ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Belge Listesi */}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredDocuments.map((document) => (
              <Card key={document.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {getFileIcon(document.type)}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate" title={document.name}>
                        {document.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {categories.find((c) => c.id === document.category)?.name}
                        </Badge>
                        <Badge variant={document.owner === "company" ? "default" : "secondary"} className="text-xs">
                          {document.owner === "company" ? "Şirket" : "Taşeron"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{document.ownerName}</p>
                      <p className="text-xs text-muted-foreground">
                        {document.project} • {document.size}
                      </p>
                      <p className="text-xs text-muted-foreground">{document.uploadDate}</p>

                      {/* Etiketler */}
                      {document.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {document.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                          {document.tags.length > 3 && (
                            <span className="text-xs text-muted-foreground">+{document.tags.length - 3}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Eye className="h-3 w-3 mr-1" />
                      Görüntüle
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Download className="h-3 w-3 mr-1" />
                      İndir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">Belge bulunamadı</h3>
                <p className="text-muted-foreground">Seçili filtrelere uygun belge bulunmuyor.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <UploadModal />
    </div>
  )
}
