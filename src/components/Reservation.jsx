import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, ChevronRight, X } from 'lucide-react';

const ReservationModal = ({ isOpen, onClose, t }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl bg-portun-card border border-white/10 rounded-sm shadow-2xl overflow-hidden"
                    >
                        {/* Header Decoration */}
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-portun-accent to-transparent"></div>
                        
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/40 hover:text-portun-accent transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto no-scrollbar">
                            <div className="text-center mb-10">
                                <span className="text-portun-accent font-serif italic text-lg mb-2 block">{t.badge}</span>
                                <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-tight">{t.title_part1} <span className="text-portun-accent italic">{t.title_part2}</span></h2>
                                <p className="text-center text-[10px] text-white/30 mt-6 uppercase tracking-widest font-bold">
                                    {t.call_us} <span className="text-portun-accent">+39 042668194</span>
                                </p>
                            </div>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 px-1">{t.labels.name}</label>
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="John Doe" 
                                        className="w-full bg-white/5 border border-white/10 p-3.5 text-white placeholder-white/20 outline-none focus:border-portun-accent transition-colors"
                                    />
                                </div>

                                <div className="space-y-1.5 relative">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 px-1">{t.labels.date}</label>
                                    <div className="relative">
                                        <input 
                                            type="date" 
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-3.5 text-white outline-none focus:border-portun-accent transition-colors appearance-none"
                                        />
                                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={18} />
                                    </div>
                                </div>

                                <div className="space-y-1.5 relative">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 px-1">{t.labels.time}</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/5 border border-white/10 p-3.5 text-white outline-none focus:border-portun-accent transition-colors appearance-none">
                                            <option className="bg-portun-card">07:00 PM</option>
                                            <option className="bg-portun-card">07:30 PM</option>
                                            <option className="bg-portun-card">08:00 PM</option>
                                            <option className="bg-portun-card">08:30 PM</option>
                                            <option className="bg-portun-card">09:00 PM</option>
                                        </select>
                                        <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={18} />
                                    </div>
                                </div>

                                <div className="space-y-1.5 relative">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 px-1">{t.labels.guests}</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/5 border border-white/10 p-3.5 text-white outline-none focus:border-portun-accent transition-colors appearance-none">
                                            <option className="bg-portun-card">2 Guests</option>
                                            <option className="bg-portun-card">3 Guests</option>
                                            <option className="bg-portun-card">4 Guests</option>
                                            <option className="bg-portun-card">More than 4</option>
                                        </select>
                                        <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={18} />
                                    </div>
                                </div>

                                <div className="space-y-1.5 relative md:col-span-1">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 px-1">{t.labels.phone}</label>
                                    <input 
                                        type="tel" 
                                        placeholder="+39..." 
                                        className="w-full bg-white/5 border border-white/10 p-3.5 text-white placeholder-white/20 outline-none focus:border-portun-accent transition-colors"
                                    />
                                </div>

                                <div className="md:col-span-2 space-y-1.5">
                                     <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 px-1">{t.labels.message}</label>
                                     <textarea 
                                        placeholder="..." 
                                        rows="3"
                                        className="w-full bg-white/5 border border-white/10 p-3.5 text-white placeholder-white/20 outline-none focus:border-portun-accent transition-colors resize-none"
                                     ></textarea>
                                </div>

                                <div className="md:col-span-2 mt-4">
                                    <button type="submit" className="btn-primary w-full justify-center py-4 group">
                                        {t.submit} <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ReservationModal;
