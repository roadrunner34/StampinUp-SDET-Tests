import axios from 'axios';

export class TempEmailService {
    private readonly apiKey: string;
    private readonly baseUrl: string;
    private readonly headers: Record<string, string>;

    constructor(apiKey: string) {
        this.apiKey = '2c044d6d00msh4e6be1659ab2ddfp18f37ajsn4cf95eb1bf74';
        this.baseUrl = 'https://privatix-temp-mail-v1.p.rapidapi.com';
        this.headers = {
            'x-rapidapi-key': this.apiKey,
            'x-rapidapi-host': 'privatix-temp-mail-v1.p.rapidapi.com'
        };
    }

    /**
     * Get a new temporary email address
     */
    async getNewEmail(): Promise<string> {
        try {
            const response = await axios.get(`${this.baseUrl}/request/new/`, {
                headers: this.headers
            });
            return response.data.email;
        } catch (error) {
            console.error('Error getting new email:', error);
            throw error;
        }
    }

    /**
     * Get all messages for the current email address
     */
    async getMessages(): Promise<any[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/request/mail/id/`, {
                headers: this.headers
            });
            return response.data;
        } catch (error) {
            console.error('Error getting messages:', error);
            throw error;
        }
    }

    /**
     * Delete a specific message by ID
     */
    async deleteMessage(mailId: string): Promise<void> {
        try {
            await axios.get(`${this.baseUrl}/request/delete/id/${mailId}/`, {
                headers: this.headers
            });
        } catch (error) {
            console.error('Error deleting message:', error);
            throw error;
        }
    }

    /**
     * Wait for a specific email with a given subject
     * @param subject The subject to look for
     * @param timeoutMs Maximum time to wait in milliseconds
     * @param checkIntervalMs Interval between checks in milliseconds
     */
    async waitForEmail(subject: string, timeoutMs: number = 30000, checkIntervalMs: number = 1000): Promise<any> {
        const startTime = Date.now();
        
        while (Date.now() - startTime < timeoutMs) {
            const messages = await this.getMessages();
            const matchingMessage = messages.find(msg => msg.subject === subject);
            
            if (matchingMessage) {
                return matchingMessage;
            }
            
            await new Promise(resolve => setTimeout(resolve, checkIntervalMs));
        }
        
        throw new Error(`Timeout waiting for email with subject: ${subject}`);
    }
} 