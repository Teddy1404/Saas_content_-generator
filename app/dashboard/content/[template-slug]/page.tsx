'use client'; // Ensure the component is marked as a client component

import React, { useState, useContext } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateList';
import Templates from '@/app/(data)/Templates';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/Aimodel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useHistoryContext } from '@/app/(context)/HistoryProvider';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+

interface PROPS {
    params: {
        'template-slug': string;
    };
}

function CreateNewContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug === props.params['template-slug']
    );
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAIOutput] = useState<string>('');
    const { user } = useUser();
    const { setHistoryData } = useHistoryContext();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

    const router = useRouter();

    const GenerateAiContent = async (formData: any) => {
        if (totalUsage >= 10000) {
            alert('You have reached your daily limit of 10,000 words. Please try again tomorrow');
            router.push('/dashboard/billing');
            return;
        }
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAIPrompt = JSON.stringify(formData) + ',' + SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIPrompt);

        const aiResponse = await result?.response.text();
        setAIOutput(aiResponse);
        await SaveInDb(formData, selectedTemplate?.slug, aiResponse);

        setLoading(false);
    };

    const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
        if (!formData) {
            console.error('formData is null or undefined');
            return;
        }

        const newHistoryItem = {
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResp,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD/MM/yyyy'),
        };

        // Save to the database
        await db.insert(AIOutput).values(newHistoryItem);

        // Update the history data in the provider
        setHistoryData((prevData) => [...prevData, newHistoryItem]);
    };

    return (
        <>
            <div className="p-5">
                <Link href={'/dashboard'}>
                    <Button>
                        <ArrowLeft />
                        Back
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAiContent(v)}
                    loading={loading}
                />
                <div className="col-span-2">
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </>
    );
}

export default CreateNewContent;
