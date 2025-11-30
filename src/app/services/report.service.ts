import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({ providedIn: 'root' })
export class ReportService {
  generateDailyReport(tickets: Ticket[]) {
    return {
      totalIssued: tickets.length,
      totalAttended: tickets.filter((t) => t.attended).length,
      byType: {
        SP: tickets.filter((t) => t.type === 'SP').length,
        SG: tickets.filter((t) => t.type === 'SG').length,
        SE: tickets.filter((t) => t.type === 'SE').length,
      },
    };
  }
}
