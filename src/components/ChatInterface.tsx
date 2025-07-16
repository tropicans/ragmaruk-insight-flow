
import { useState } from "react";
import { Send, Bot, User, FileText, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  document?: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Halo! Saya adalah asisten AI RAGMARUK 🤖 Saya siap membantu Anda mencari informasi dari knowledge base perusahaan. Silakan ajukan pertanyaan atau pilih dokumen yang ingin Anda eksplorasi!',
      timestamp: new Date(),
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedDocument, setSelectedDocument] = useState('all');
  const [selectedModel, setSelectedModel] = useState('gpt-4');

  const documents = [
    { id: 'all', name: 'Semua Dokumen', count: 45 },
    { id: 'handbook', name: 'Employee Handbook', count: 12 },
    { id: 'policies', name: 'Company Policies', count: 8 },
    { id: 'procedures', name: 'SOPs & Procedures', count: 15 },
    { id: 'training', name: 'Training Materials', count: 10 },
  ];

  const models = [
    { id: 'gpt-4', name: 'GPT-4', description: 'Paling akurat' },
    { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', description: 'Cepat & efisien' },
    { id: 'claude', name: 'Claude', description: 'Analisis mendalam' },
  ];

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: newMessage,
      timestamp: new Date(),
      document: selectedDocument !== 'all' ? documents.find(d => d.id === selectedDocument)?.name : undefined,
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `Berdasarkan ${selectedDocument === 'all' ? 'semua dokumen' : documents.find(d => d.id === selectedDocument)?.name} yang tersedia, saya menemukan informasi yang relevan dengan pertanyaan Anda. Berikut adalah ringkasan dari knowledge base kami... 📚\n\nApakah ada hal spesifik lain yang ingin Anda ketahui?`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setNewMessage('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
      {/* Chat Configuration Panel */}
      <div className="lg:col-span-1 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Settings className="h-5 w-5 mr-2 text-primary" />
              Konfigurasi Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Pilih Dokumen
              </label>
              <Select value={selectedDocument} onValueChange={setSelectedDocument}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih sumber dokumen" />
                </SelectTrigger>
                <SelectContent>
                  {documents.map((doc) => (
                    <SelectItem key={doc.id} value={doc.id}>
                      <div className="flex items-center justify-between w-full">
                        <span>{doc.name}</span>
                        <Badge variant="secondary" className="ml-2">
                          {doc.count}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Model AI
              </label>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih model AI" />
                </SelectTrigger>
                <SelectContent>
                  {models.map((model) => (
                    <SelectItem key={model.id} value={model.id}>
                      <div>
                        <div className="font-medium">{model.name}</div>
                        <div className="text-xs text-gray-500">{model.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 border-t">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                API Key
              </label>
              <Input 
                type="password" 
                placeholder="Masukkan API key..."
                className="text-xs"
              />
              <p className="text-xs text-gray-500 mt-1">
                Opsional: Gunakan API key pribadi
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Ringkas dokumen
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm" size="sm">
              <Bot className="h-4 w-4 mr-2" />
              Bandingkan kebijakan
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm" size="sm">
              <User className="h-4 w-4 mr-2" />
              Cari prosedur
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Chat Area */}
      <div className="lg:col-span-3">
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-orange-50">
            <CardTitle className="flex items-center">
              <Bot className="h-6 w-6 mr-2 text-primary" />
              RAGMARUK AI Assistant
              <Badge className="ml-auto bg-green-100 text-green-800">
                Online
              </Badge>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 p-0 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`p-4 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{message.content}</div>
                      {message.document && (
                        <div className="mt-2 text-xs opacity-75">
                          📄 Sumber: {message.document}
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                  <div className={`${message.type === 'user' ? 'order-1 mr-3' : 'order-2 ml-3'} flex-shrink-0`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' ? 'bg-primary' : 'bg-gray-300'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-gray-600" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Ketik pertanyaan Anda..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button onClick={sendMessage} className="btn-primary">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                💡 Tip: Spesifikkan dokumen untuk hasil yang lebih akurat
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatInterface;
