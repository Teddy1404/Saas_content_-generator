'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useHistoryContext } from '@/app/(context)/HistoryProvider';

export interface HISTORY {
    formData: string;
    templateSlug: string;
    aiResponse: string;
    createdBy: string;
    createdAt: string;
}

function History() {
    const { historyData, setHistoryData } = useHistoryContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistoryData = async () => {
            // Fetch data from the database
            const data = await db.select().from(AIOutput).orderBy('createdAt', 'desc');
            setHistoryData(data); // Set the fetched data to the historyData context
            setLoading(false); // Disable loading state
        };

        fetchHistoryData();
    }, [setHistoryData]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    return (
        <div className="history-section p-4">
            <div className="grid grid-cols-5 gap-4 font-semibold bg-gray-200 p-2">
                <div>TEMPLATE</div>
                <div>AI RES</div>
                <div>DATE</div>
                <div>WORDS</div>
                <div>COPY</div>
            </div>

            {historyData.map((item, index) => (
                <div
                    key={index}
                    className="grid grid-cols-5 gap-4 p-2 border-b items-center"
                >
                    <div>{item.templateSlug}</div>
                    <div className="truncate">{item.aiResponse}</div>
                    <div>{item.createdAt}</div>
                    <div>{item.aiResponse?.split(' ').length ?? 0}</div>
                    <div>
                        <Button
                            onClick={() =>
                                navigator.clipboard.writeText(item.aiResponse)
                            }
                        >
                            Copy
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default History;
