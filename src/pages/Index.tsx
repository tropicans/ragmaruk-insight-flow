
import { MessageSquare, Upload, BarChart3, Bell, Brain, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Dashboard from "@/components/Dashboard";
import { useState } from "react";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary animate-float" />
              <span className="text-2xl font-bold text-gray-900">RAGMARUK</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Fitur</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">Tentang</a>
              <Button 
                className="btn-primary"
                onClick={() => setShowDashboard(true)}
              >
                Mulai Sekarang
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
              AI Knowledge Base
              <span className="text-primary block">yang Cerdas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Transformasi cara perusahaan Anda mengelola pengetahuan dengan 
              <span className="text-primary font-semibold"> chatbot interaktif</span> dan 
              <span className="text-primary font-semibold"> RAG internal docs</span> 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => setShowDashboard(true)}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Mulai Chat Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setShowDashboard(true)}
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Dokumen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fitur Unggulan RAGMARUK ✨
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk knowledge management dengan teknologi AI terdepan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Upload Dokumen Knowledge Base</CardTitle>
                <CardDescription>
                  Upload dan kelola berbagai format dokumen untuk membangun knowledge base yang komprehensif 📂
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Chat Cerdas Interaktif</CardTitle>
                <CardDescription>
                  Berinteraksi dengan AI yang memahami konteks dokumen Anda dengan pilihan model dan API yang fleksibel 🤖
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Dashboard & Metrik</CardTitle>
                <CardDescription>
                  Pantau riwayat percakapan dan analisis penggunaan dengan dashboard yang informatif 📊
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Notifikasi WhatsApp</CardTitle>
                <CardDescription>
                  Dapatkan notifikasi real-time langsung ke WhatsApp untuk update penting 📱
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Teknologi RAG</CardTitle>
                <CardDescription>
                  Retrieval-Augmented Generation untuk jawaban yang akurat berdasarkan dokumen internal 🔄
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Keamanan Terjamin</CardTitle>
                <CardDescription>
                  Data perusahaan Anda aman dengan enkripsi dan kontrol akses yang ketat 🔒
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Siap Transformasi Knowledge Management? 🚀
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bergabunglah dengan perusahaan-perusahaan yang telah merasakan manfaat RAGMARUK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => setShowDashboard(true)}
              >
                <Users className="mr-2 h-5 w-5" />
                Mulai Gratis Sekarang
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">RAGMARUK</span>
              </div>
              <p className="text-gray-400 mb-4">
                Platform AI knowledge base yang cerdas untuk transformasi digital perusahaan Anda.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Fitur</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Knowledge Base</li>
                <li>Chatbot Interaktif</li>
                <li>RAG Internal Docs</li>
                <li>Dashboard Analytics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <p className="text-gray-400">
                Email: info@ragmaruk.com<br />
                WhatsApp: +62 xxx-xxxx-xxxx
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              Dibuat oleh <span className="text-primary font-semibold">Yudhi</span> © 2025 - 
              All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
