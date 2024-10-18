import { create } from 'zustand';
import io from 'socket.io-client';

export const socketStore = create((set, get) => ({
    socket: null,
    isConnected: false,
    
    initializeSocket: () => {
        const newSocket = io('http://localhost:3000', {
            transports: ['websocket'],
            reconnection: true
        });

        newSocket.on('connect', () => {
            set({ isConnected: true })
        });

        newSocket.on('disconnect', (reason) => {
            set({ isConnected: false })
        });

        set({ socket: newSocket });
    },

    disconnectSocket: () => {
        const { socket } = get();
        if (socket) {
            socket.disconnect();
            set({ socket: null, isConnected: false});
        }
    }
}));