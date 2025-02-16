'use client'
import React, { useState, useRef } from 'react';
import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

const VideoUpload: React.FC = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setVideoFile(file);
        }
    };

    const handleUpload = async () => {
        if (!videoFile) return;

        setUploading(true);
        const { data, error } = await supabase.storage
            .from('your-bucket-name')
            .upload(`videos/${videoFile.name}`, videoFile);

        setUploading(false);

        if (error) {
            console.error('Error uploading video:', error);
        } else {
            console.log('Video uploaded successfully:', data);
        }
    };

    return (
        <div>
            <input ref={ref} hidden type="file" accept="video/*" onChange={handleFileChange} />
            <button className=" m-1 bg-orange-300 text-black p-1 rounded" onClick={() => ref.current?.click()}>
                Select Video
            </button>
            <button className="bg-pink-300 text-black p-1 rounded" onClick={handleUpload} disabled={uploading}/>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload Video'}
            </button>
        </div>
    );
};

export default VideoUpload;
