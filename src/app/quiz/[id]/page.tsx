"use client"

import React from 'react';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import Loading from '@/components/Loading';
import GridLayout from '@/components/ui/gridLayout';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const QuizPage = () => {
    const params = useParams();
    const { id } = params; // Get the quiz ID from the URL

    // Use SWR to fetch the quiz data
    const { data, error } = useSWR(id ? `/api/tests/${id}` : null, fetcher);

    if (error) return <div>Error loading quiz.</div>;
    if (!data) return <Loading />; // Show loading spinner while fetching

    return (
        <GridLayout>
            <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
            <p className="mb-4">{data.description}</p>
            {/* You can add quiz questions and options here */}
            <p>More details about the quiz will go here.</p>
        </GridLayout>
    );
};

export default QuizPage;
