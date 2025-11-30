export type TicketType = 'SP' | 'SG' | 'SE';

export interface Ticket {
  id: string;
  type: TicketType;
  number: number;
  timestamp: Date;
  status: 'waiting' | 'called' | 'completed';
  desk?: number;
}