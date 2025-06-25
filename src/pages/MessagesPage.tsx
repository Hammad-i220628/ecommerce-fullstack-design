import React, { useState } from 'react';
import { ArrowLeft, Send, Search, MoreVertical, Phone, Video, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface MessagesPageProps {
  onBackToHome: () => void;
}

const MessagesPage: React.FC<MessagesPageProps> = ({ onBackToHome }) => {
  const { state } = useApp();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConversationsList, setShowConversationsList] = useState(true);

  // Mock conversations data
  const conversations = [
    {
      id: '1',
      participant: {
        id: '2',
        name: 'Artel Market',
        avatar: '/tech/1.jpg',
        online: true,
        lastSeen: 'Online'
      },
      lastMessage: {
        content: 'Thank you for your inquiry about the Canon camera. We have it in stock!',
        timestamp: new Date('2024-01-15T10:30:00'),
        senderId: '2'
      },
      unreadCount: 2,
      messages: [
        {
          id: '1',
          content: 'Hi, I\'m interested in the Canon Camera EOS 2000. Is it still available?',
          timestamp: new Date('2024-01-15T10:00:00'),
          senderId: '1',
          read: true
        },
        {
          id: '2',
          content: 'Hello! Yes, the Canon Camera EOS 2000 is still available. We have it in stock.',
          timestamp: new Date('2024-01-15T10:15:00'),
          senderId: '2',
          read: true
        },
        {
          id: '3',
          content: 'What\'s the best price you can offer for bulk orders?',
          timestamp: new Date('2024-01-15T10:20:00'),
          senderId: '1',
          read: true
        },
        {
          id: '4',
          content: 'Thank you for your inquiry about the Canon camera. We have it in stock!',
          timestamp: new Date('2024-01-15T10:30:00'),
          senderId: '2',
          read: false
        }
      ]
    },
    {
      id: '2',
      participant: {
        id: '3',
        name: 'Best Factory LLC',
        avatar: '/tech/5.jpg',
        online: false,
        lastSeen: '2 hours ago'
      },
      lastMessage: {
        content: 'We can offer a 15% discount for orders over 100 pieces.',
        timestamp: new Date('2024-01-14T16:45:00'),
        senderId: '3'
      },
      unreadCount: 0,
      messages: [
        {
          id: '1',
          content: 'Hello, I saw your T-shirt listing. Do you offer bulk discounts?',
          timestamp: new Date('2024-01-14T16:00:00'),
          senderId: '1',
          read: true
        },
        {
          id: '2',
          content: 'Yes, we do offer bulk discounts. What quantity are you looking for?',
          timestamp: new Date('2024-01-14T16:30:00'),
          senderId: '3',
          read: true
        },
        {
          id: '3',
          content: 'I\'m interested in ordering around 200 pieces.',
          timestamp: new Date('2024-01-14T16:40:00'),
          senderId: '1',
          read: true
        },
        {
          id: '4',
          content: 'We can offer a 15% discount for orders over 100 pieces.',
          timestamp: new Date('2024-01-14T16:45:00'),
          senderId: '3',
          read: true
        }
      ]
    },
    {
      id: '3',
      participant: {
        id: '4',
        name: 'TechWorld Store',
        avatar: '/tech/8.jpg',
        online: true,
        lastSeen: 'Online'
      },
      lastMessage: {
        content: 'The shipping will take 3-5 business days.',
        timestamp: new Date('2024-01-13T14:20:00'),
        senderId: '4'
      },
      unreadCount: 1,
      messages: [
        {
          id: '1',
          content: 'Hi, when can you ship the smartwatch?',
          timestamp: new Date('2024-01-13T14:00:00'),
          senderId: '1',
          read: true
        },
        {
          id: '2',
          content: 'The shipping will take 3-5 business days.',
          timestamp: new Date('2024-01-13T14:20:00'),
          senderId: '4',
          read: false
        }
      ]
    }
  ];

  const selectedConv = conversations.find(conv => conv.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConv) {
      // In a real app, this would dispatch an action to add the message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleConversationSelect = (conversationId: string) => {
    setSelectedConversation(conversationId);
    // On mobile, hide conversations list when a conversation is selected
    if (window.innerWidth < 1024) {
      setShowConversationsList(false);
    }
  };

  const handleBackToConversations = () => {
    setShowConversationsList(true);
    setSelectedConversation(null);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return formatTime(date);
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-4 lg:mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to home</span>
          </button>
          
          {/* Mobile conversation toggle */}
          {selectedConv && !showConversationsList && (
            <button
              onClick={handleBackToConversations}
              className="lg:hidden flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <Menu className="w-5 h-5" />
              <span>Conversations</span>
            </button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 200px)', minHeight: '500px' }}>
          <div className="flex h-full">
            {/* Conversations List */}
            <div className={`${
              showConversationsList ? 'flex' : 'hidden'
            } lg:flex w-full lg:w-1/3 border-r border-gray-200 flex-col`}>
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => handleConversationSelect(conversation.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedConversation === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                          <img
                            src={conversation.participant.avatar}
                            alt={conversation.participant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {conversation.participant.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-gray-900 truncate">
                            {conversation.participant.name}
                          </h3>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                            {formatDate(conversation.lastMessage.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">
                          {conversation.lastMessage.content}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {conversation.participant.lastSeen}
                          </span>
                          {conversation.unreadCount > 0 && (
                            <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className={`${
              !showConversationsList || selectedConv ? 'flex' : 'hidden'
            } lg:flex flex-1 flex-col`}>
              {selectedConv ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Mobile back button */}
                      <button
                        onClick={handleBackToConversations}
                        className="lg:hidden p-1 text-gray-600 hover:text-gray-800"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                          <img
                            src={selectedConv.participant.avatar}
                            alt={selectedConv.participant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {selectedConv.participant.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{selectedConv.participant.name}</h3>
                        <p className="text-sm text-gray-500 truncate">{selectedConv.participant.lastSeen}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                        <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                        <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {selectedConv.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.senderId === '1' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-lg ${
                            message.senderId === '1'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200 text-gray-900'
                          }`}
                        >
                          <p className="text-sm break-words">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.senderId === '1' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                    <p className="text-gray-600 text-center max-w-sm">Choose a conversation from the list to start messaging.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;