'use client';

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { HISTORY } from '../history/page';

function UsageTrack() {
    const { user } = useUser();
    const [totalUsage, setTotalUsage] = useState<number>(0);

    useEffect(() => {
        if (user) {
            GetData();
        }
    }, [user]);

    const GetData = async () => {
        if (user?.primaryEmailAddress?.emailAddress) {
            const result: HISTORY[] = await db
                .select()
                .from(AIOutput)
                .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

            GetTotalUsage(result);
        }
    };

    const GetTotalUsage = (result: HISTORY[]) => {
        let totalTokens: number = 0;
        result.forEach(element => {
            totalTokens += element.aiResponse.trim().split(/\s+/).length; // Counting the number of words (tokens)
        });

        setTotalUsage(totalTokens);
    };

    const totalCredits = 10000; // Define your total credits here
    const usedPercentage = (totalUsage / totalCredits) * 100; // Calculate percentage used

    return (
        <div className='m-5'>
            <div className='bg-primary text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div
                        className='h-2 bg-white rounded-full'
                        style={{
                            width: `${usedPercentage}%`,
                        }}
                    />
                </div>
                <h2 className='text-sm my-2'>{totalUsage} / {totalCredits} credits used</h2>
            </div>
            <Button variant='secondary' className='w-full my-3 text-primary'>
                Upgrade
            </Button>
        </div>
    );
}

export default UsageTrack;
