"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export const CreateHakedisContent = () => {
  const [activeTab, setActiveTab] = useState("company")
  const [hakedisData, setHakedisData] = useState({
    // Genel Bilgiler
    hakedisNo: "HAK-2024-001",
    hakedisDate: new Date().toISOString().split("T")[0],
    period: "Kasım 2024",
    project: "",

    // Şirket/Taşeron Bilgileri
    type: "company", // company veya contractor
    contractorName: "",
    contractorTaxNo: "",
    contractorAddress: "",

    // Hakediş Kalemleri
    items: [{ id: 1, description: "", unit: "m2", quantity: 0, unitPrice: 0, total: 0, completionRate: 0 }],

    // Kesintiler
    deductions: [
      { id: 1, type: "Stopaj", rate: 3, amount: 0 },
      { id: 2, type: "SGK", rate: 15, amount: 0 },
      { id: 3, type: "Damga Vergisi", rate: 0.75, amount: 0 },
    ],

    // Ekler
    attachments: [],

    // Notlar
    notes: "",
    approvalStatus: "draft", // draft, pending, approved, paid
  })

  const [previewMode, setPreviewMode] = useState(false)

  const projects = [
    { id: "konya", name: "Konya Rezidans" },
    { id: "ankara", name: "Ankara Plaza" },
    { id: "istanbul", name: "İstanbul Towers" },
    { id: "bursa", name: "Bursa Sitesi" },
  ]

  const contractors = [
    { id: 1, name: "Mehmet İnşaat Ltd.", taxNo: "1234567890", address: "Ankara" },
    { id: 2, name: "Yılmaz Yapı A.Ş.", taxNo: "0987654321", address: "İstanbul" },
    { id: 3, name: "Demir İnşaat", taxNo: "1122334455", address: "İzmir" },
  ]

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      description: "",
      unit: "m2",
      quantity: 0,
      unitPrice: 0,
      total: 0,
      completionRate: 0,
    }
    setHakedisData({
      ...hakedisData,
      items: [...hakedisData.items, newItem],
    })
  }

  const updateItem = (id, field, value) => {
    const updatedItems = hakedisData.items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value }
        if (field === "quantity" || field === "unitPrice") {
          updatedItem.total = updatedItem.quantity * updatedItem.unitPrice
        }
        return updatedItem
      }
      return item
    })
    setHakedisData({ ...hakedisData, items: updatedItems })
  }

  const removeItem = (id) => {
    setHakedisData({
      ...hakedisData,
      items: hakedisData.items.filter((item) => item.id !== id),
    })
  }

  const calculateTotals = () => {
    const subtotal = hakedisData.items.reduce((sum, item) => sum + item.total, 0)
    const totalDeductions = hakedisData.deductions.reduce((sum, deduction) => {
      const amount = subtotal * (deduction.rate / 100)
      return sum + amount
    }, 0)
    const netTotal = subtotal - totalDeductions
    return { subtotal, totalDeductions, netTotal }
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    const newAttachments = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
    }))
    setHakedisData({
      ...hakedisData,
      attachments: [...hakedisData.attachments, ...newAttachments],
    })
  }

  const removeAttachment = (id) => {
    setHakedisData({
      ...hakedisData,
      attachments: hakedisData.attachments.filter((att) => att.id !== id),
    })
  }

  const CompanyHakedisTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Şirket Hakediş Bilgileri</CardTitle>
          <CardDescription>Şirketin kendi işleri için hakediş</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">Hakediş No</label>
              <Input
                value={hakedisData.hakedisNo}
                onChange={(e) => setHakedisData({ ...hakedisData, hakedisNo: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Hakediş Tarihi</label>
              <Input
                type="date"
                value={hakedisData.hakedisDate}
                onChange={(e) => setHakedisData({ ...hakedisData, hakedisDate: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Dönem</label>
              <Input
                value={hakedisData.period}
                onChange={(e) => setHakedisData({ ...hakedisData, period: e.target.value })}
                placeholder="Örn: Kasım 2024"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Proje</label>
            <select
              value={hakedisData.project}
              onChange={(e) => setHakedisData({ ...hakedisData, project: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="">Proje Seçin</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ContractorHakedisTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Taşeron Hakediş Bilgileri</CardTitle>
          <CardDescription>Taşeron firmalar için hakediş</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">Hakediş No</label>
              <Input
                value={hakedisData.hakedisNo}
                onChange={(e) => setHakedisData({ ...hakedisData, hakedisNo: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Hakediş Tarihi</label>
              <Input
                type="date"
                value={hakedisData.hakedisDate}
                onChange={(e) => setHakedisData({ ...hakedisData, hakedisDate: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Dönem</label>
              <Input
                value={hakedisData.period}
                onChange={(e) => setHakedisData({ ...hakedisData, period: e.target.value })}
                placeholder="Örn: Kasım 2024"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Proje</label>
              <select
                value={hakedisData.project}
                onChange={(e) => setHakedisData({ ...hakedisData, project: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="">Proje Seçin</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Taşeron</label>
              <select
                value={hakedisData.contractorName}
                onChange={(e) => {
                  const contractor = contractors.find((c) => c.name === e.target.value)
                  setHakedisData({
                    ...hakedisData,
                    contractorName: e.target.value,
                    contractorTaxNo: contractor?.taxNo || "",
                    contractorAddress: contractor?.address || "",
                  })
                }}
                className="w-full p-2 border rounded"
              >
                <option value="">Taşeron Seçin</option>
                {contractors.map((contractor) => (
                  <option key={contractor.id} value={contractor.name}>
                    {contractor.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hakedisData.contractorName && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Vergi No</label>
                <Input
                  value={hakedisData.contractorTaxNo}
                  onChange={(e) => setHakedisData({ ...hakedisData, contractorTaxNo: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Adres</label>
                <Input
                  value={hakedisData.contractorAddress}
                  onChange={(e) => setHakedisData({ ...hakedisData, contractorAddress: e.target.value })}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )

  const HakedisPreview = () => {
    const { subtotal, totalDeductions, netTotal } = calculateTotals()

    return (
      <div className="bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">HAKEDİŞ BELGESİ</h1>
          <p className="text-lg text-gray-600">{hakedisData.hakedisNo}</p>
          <p className="text-sm text-gray-500">{hakedisData.period}</p>
        </div>

        {/* Proje ve Taşeron Bilgileri */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Proje Bilgileri:</h3>
            <div className="text-sm text-gray-600">
              <p>Proje: {projects.find((p) => p.id === hakedisData.project)?.name}</p>
              <p>Dönem: {hakedisData.period}</p>
              <p>Tarih: {hakedisData.hakedisDate}</p>
            </div>
          </div>
          {activeTab === "contractor" && hakedisData.contractorName && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Taşeron Bilgileri:</h3>
              <div className="text-sm text-gray-600">
                <p>{hakedisData.contractorName}</p>
                <p>Vergi No: {hakedisData.contractorTaxNo}</p>
                <p>{hakedisData.contractorAddress}</p>
              </div>
            </div>
          )}
        </div>

        {/* İş Kalemleri */}
        <table className="w-full mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3 border">İş Kalemi</th>
              <th className="text-center p-3 border">Birim</th>
              <th className="text-center p-3 border">Miktar</th>
              <th className="text-right p-3 border">Birim Fiyat</th>
              <th className="text-center p-3 border">Tamamlanma %</th>
              <th className="text-right p-3 border">Tutar</th>
            </tr>
          </thead>
          <tbody>
            {hakedisData.items.map((item, index) => (
              <tr key={item.id}>
                <td className="p-3 border">{item.description}</td>
                <td className="text-center p-3 border">{item.unit}</td>
                <td className="text-center p-3 border">{item.quantity}</td>
                <td className="text-right p-3 border">₺{item.unitPrice.toFixed(2)}</td>
                <td className="text-center p-3 border">{item.completionRate}%</td>
                <td className="text-right p-3 border">₺{item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Hesaplamalar */}
        <div className="flex justify-end mb-8">
          <div className="w-80">
            <div className="flex justify-between py-2">
              <span>Brüt Tutar:</span>
              <span>₺{subtotal.toFixed(2)}</span>
            </div>

            {hakedisData.deductions.map((deduction) => {
              const amount = subtotal * (deduction.rate / 100)
              return (
                <div key={deduction.id} className="flex justify-between py-1 text-sm text-red-600">
                  <span>
                    {deduction.type} ({deduction.rate}%):
                  </span>
                  <span>-₺{amount.toFixed(2)}</span>
                </div>
              )
            })}

            <div className="flex justify-between py-2 border-t-2 border-gray-300 font-bold text-lg">
              <span>Net Hakediş Tutarı:</span>
              <span>₺{netTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Notlar */}
        {hakedisData.notes && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Notlar:</h4>
            <p className="text-sm text-gray-600">{hakedisData.notes}</p>
          </div>
        )}

        {/* Ekler */}
        {hakedisData.attachments.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Ekler:</h4>
            <ul className="text-sm text-gray-600">
              {hakedisData.attachments.map((att) => (
                <li key={att.id}>• {att.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* İmza Alanları */}
        <div className="grid grid-cols-2 gap-8 mt-16">
          <div className="text-center">
            <div className="border-t border-gray-400 pt-2">
              <p className="text-sm">Hazırlayan</p>
            </div>
          </div>
          <div className="text-center">
            <div className="border-t border-gray-400 pt-2">
              <p className="text-sm">Onaylayan</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dinamik Hakediş Oluştur</h2>
          <p className="text-muted-foreground">Şirket ve taşeron hakediş formları</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setPreviewMode(!previewMode)}>
            {previewMode ? "Düzenle" : "Önizleme"}
          </Button>
          <Button>PDF İndir</Button>
          <Button>Kaydet</Button>
        </div>
      </div>

      {/* Durum Kartları */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Hakediş Durumu</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge
              variant={
                hakedisData.approvalStatus === "approved"
                  ? "default"
                  : hakedisData.approvalStatus === "pending"
                    ? "secondary"
                    : "outline"
              }
            >
              {hakedisData.approvalStatus === "draft"
                ? "Taslak"
                : hakedisData.approvalStatus === "pending"
                  ? "Onay Bekliyor"
                  : hakedisData.approvalStatus === "approved"
                    ? "Onaylandı"
                    : "Ödendi"}
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Brüt Tutar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺{calculateTotals().subtotal.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Kesintiler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₺{calculateTotals().totalDeductions.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Net Tutar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₺{calculateTotals().netTotal.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>

      {!previewMode ? (
        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
            <Button
              variant={activeTab === "company" ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                setActiveTab("company")
                setHakedisData({ ...hakedisData, type: "company" })
              }}
            >
              🏢 Şirket Hakediş
            </Button>
            <Button
              variant={activeTab === "contractor" ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                setActiveTab("contractor")
                setHakedisData({ ...hakedisData, type: "contractor" })
              }}
            >
              👷 Taşeron Hakediş
            </Button>
          </div>

          {/* Tab Content */}
          {activeTab === "company" ? <CompanyHakedisTab /> : <ContractorHakedisTab />}

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sol Panel - İş Kalemleri */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>İş Kalemleri</CardTitle>
                    <Button size="sm" onClick={addItem}>
                      Kalem Ekle
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hakedisData.items.map((item, index) => (
                      <div key={item.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium">İş Kalemi {index + 1}</span>
                          {hakedisData.items.length > 1 && (
                            <Button size="sm" variant="destructive" onClick={() => removeItem(item.id)}>
                              Sil
                            </Button>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium">İş Açıklaması</label>
                            <Input
                              value={item.description}
                              onChange={(e) => updateItem(item.id, "description", e.target.value)}
                              placeholder="İş kalemi açıklaması"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-sm font-medium">Birim</label>
                              <select
                                value={item.unit}
                                onChange={(e) => updateItem(item.id, "unit", e.target.value)}
                                className="w-full p-2 border rounded"
                              >
                                <option value="m2">m²</option>
                                <option value="m3">m³</option>
                                <option value="m">Metre</option>
                                <option value="adet">Adet</option>
                                <option value="kg">Kg</option>
                                <option value="ton">Ton</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Miktar</label>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateItem(item.id, "quantity", Number.parseFloat(e.target.value) || 0)
                                }
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-sm font-medium">Birim Fiyat</label>
                              <Input
                                type="number"
                                step="0.01"
                                value={item.unitPrice}
                                onChange={(e) =>
                                  updateItem(item.id, "unitPrice", Number.parseFloat(e.target.value) || 0)
                                }
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Tamamlanma %</label>
                              <Input
                                type="number"
                                min="0"
                                max="100"
                                value={item.completionRate}
                                onChange={(e) =>
                                  updateItem(item.id, "completionRate", Number.parseFloat(e.target.value) || 0)
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium">Toplam Tutar</label>
                            <Input value={`₺${item.total.toFixed(2)}`} disabled className="bg-gray-50" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sağ Panel - Kesintiler ve Ekler */}
            <div className="space-y-6">
              {/* Kesintiler */}
              <Card>
                <CardHeader>
                  <CardTitle>Kesintiler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {hakedisData.deductions.map((deduction) => {
                      const amount = calculateTotals().subtotal * (deduction.rate / 100)
                      return (
                        <div key={deduction.id} className="flex items-center justify-between p-3 border rounded">
                          <div>
                            <p className="font-medium">{deduction.type}</p>
                            <p className="text-sm text-muted-foreground">%{deduction.rate}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-red-600">₺{amount.toFixed(2)}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Dosya Ekleri */}
              <Card>
                <CardHeader>
                  <CardTitle>Dosya Ekleri</CardTitle>
                  <CardDescription>Hakediş ile ilgili belgeleri ekleyin</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Input type="file" multiple onChange={handleFileUpload} className="mb-2" />
                      <p className="text-xs text-muted-foreground">
                        PDF, Word, Excel, resim dosyaları yükleyebilirsiniz
                      </p>
                    </div>

                    {hakedisData.attachments.length > 0 && (
                      <div className="space-y-2">
                        {hakedisData.attachments.map((attachment) => (
                          <div key={attachment.id} className="flex items-center justify-between p-2 border rounded">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              <div>
                                <p className="text-sm font-medium">{attachment.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {(attachment.size / 1024).toFixed(1)} KB
                                </p>
                              </div>
                            </div>
                            <Button size="sm" variant="destructive" onClick={() => removeAttachment(attachment.id)}>
                              Sil
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Notlar */}
              <Card>
                <CardHeader>
                  <CardTitle>Notlar</CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={hakedisData.notes}
                    onChange={(e) => setHakedisData({ ...hakedisData, notes: e.target.value })}
                    className="w-full p-2 border rounded"
                    rows={4}
                    placeholder="Hakediş ile ilgili notlar..."
                  />
                </CardContent>
              </Card>

              {/* Onay Durumu */}
              <Card>
                <CardHeader>
                  <CardTitle>Onay Durumu</CardTitle>
                </CardHeader>
                <CardContent>
                  <select
                    value={hakedisData.approvalStatus}
                    onChange={(e) => setHakedisData({ ...hakedisData, approvalStatus: e.target.value })}
                    className="w-full p-2 border rounded"
                  >
                    <option value="draft">Taslak</option>
                    <option value="pending">Onay Bekliyor</option>
                    <option value="approved">Onaylandı</option>
                    <option value="paid">Ödendi</option>
                  </select>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        /* Önizleme Modu */
        <div className="bg-gray-100 p-4">
          <HakedisPreview />
        </div>
      )}
    </div>
  )
}
