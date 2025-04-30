import fs from 'fs';
import path from 'path';

export function logTestAccount(email: string, password: string) {
    const logMessage = `Test Account Created:\nEmail: ${email}\nPassword: ${password}\nCreated at: ${new Date().toISOString()}\n---\n`;
    
    fs.appendFileSync(
        path.join(process.cwd(), 'test_accounts.log'),
        logMessage,
        { encoding: 'utf-8' }
    );
} 