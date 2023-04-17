import axios from 'axios';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import 'easymde/dist/easymde.min.css';
import ReactMarkdown from 'react-markdown';
import rehypePrism from 'rehype-prism-plus';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import styles from './make-blog.module.scss';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
    ssr: false,
});

const Home: NextPage = () => {
    const [blog, setBlog] = useState<any>();
    const [date, setDate] = useState<any>();

    const [auth, setAuth] = useState({ username: '', password: '' });
    const [imageurl, setImageURL] = useState<any>();

    const [title, setTitle] = useState('');
    const [published, setPublished] = useState('string');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const [input, setInput] = useState('');
    const [labels, setlabels] = useState(['']);

    const [response, setConsole] = useState('');
    const [run, setRun] = useState(false);

    useEffect(() => {
        if (run) localStorage.setItem('labels', JSON.stringify(labels));
    }, [labels]);

    useEffect(() => {
        if (run) localStorage.setItem('title', title);
    }, [title]);

    useEffect(() => {
        if (run) localStorage.setItem('published', published);
    }, [published]);

    useEffect(() => {
        if (run) localStorage.setItem('body', body);
    }, [body]);

    useEffect(() => {
        if (run) localStorage.setItem('author', author);
    }, [author]);

    useEffect(() => {
        const current = new Date();
        const datee = `${current.getDate()}/${
            current.getMonth() + 1
        }/${current.getFullYear()}`;
        setDate(datee);
        setBlog(new FormData());
        onload();
    }, []);

    const onload = () => {
        setTitle(localStorage.getItem('title') || '');
        setAuthor(localStorage.getItem('author') || '');
        setPublished(localStorage.getItem('published') || 'false');
        setBody(localStorage.getItem('body') || '');
        setlabels(
            JSON.parse(localStorage.getItem('labels') || '[]') as string[],
        );
        setAuth({ username: '', password: '' });
        setRun(true);
    };

    const reset = () => {
        setTitle('');
        setAuthor('');
        setPublished('false');
        setBody('');
        setlabels([]);
    };

    const updateAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { placeholder, value } = e.target;
        setAuth((prevState) => ({
            ...prevState,
            [placeholder]: value,
        }));
    };

    const submitValue = async () => {
        blog.append('title', title);
        if (published === 'true') {
            blog.append('published', 'true');
        } else {
            blog.append('published', 'false');
        }
        blog.append('body', body);
        blog.append('author', author);
        blog.append('labels', labels);

        for (const pair of blog.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        await axios
            .post('http://192.168.120.180:8080/api/Blog/', blog, {
                auth: auth,
                headers: { 'content-type': 'multipart/form-data' },
            })
            .then(function (response) {
                setConsole(JSON.stringify(response.data));
            })
            .catch(function (error) {
                setConsole(JSON.stringify(error.response.data));
            });
    };

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            if (imageurl) {
                setImageURL((prevState: any) => [
                    ...prevState,
                    {
                        name: img.name,
                        src: URL.createObjectURL(img as MediaSource),
                    },
                ]);
                blog.append('image', img, [img.name]);
            } else {
                setImageURL([
                    {
                        name: img.name,
                        src: URL.createObjectURL(img as MediaSource),
                    },
                ]);
                blog.append('image', img, [img.name]);
            }
        }
    };

    const onChange = (e: any) => {
        const { value }: { value: string } = e.target;
        setInput(value);
    };

    const onKeyDown = (e: any) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if (
            key === 'Enter' &&
            trimmedInput.length &&
            !labels.includes(trimmedInput)
        ) {
            e.preventDefault();
            setlabels((prevState) => [...prevState, trimmedInput]);
            setInput('');
        }
    };

    const deleteTag = (index: any) => {
        setlabels((prevState) => prevState.filter((tag, i) => i !== index));
    };

    const options: any = useMemo(() => {
        return {
            spellChecker: false,
            toolbar: ['bold', 'italic', 'heading', '|', 'quote', 'code'],
        };
    }, []);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    minHeight: '100vh',
                }}
            >
                <div className={styles['make-blog']}>
                    <input
                        value={title}
                        className={styles.inputs}
                        type='text'
                        placeholder='Title'
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <label>Publish</label>
                        <select
                            value={published}
                            className={styles.inputs}
                            placeholder='Published'
                            onChange={(e) => {
                                setPublished(e.target.value);
                            }}
                        >
                            <option value='false'>False</option>
                            <option value='true'>True</option>
                        </select>
                    </div>
                    <input
                        value={author}
                        className={styles.inputs}
                        type='text'
                        placeholder='Author'
                        onChange={(e) => {
                            setAuthor(e.target.value);
                        }}
                    />
                    <input
                        className={styles.inputs}
                        value={input}
                        placeholder='Enter a label'
                        onKeyDown={onKeyDown}
                        onChange={onChange}
                    />
                    <div className={styles.tags}>
                        {labels.map((tag, index) => (
                            <div
                                onClick={() => deleteTag(index)}
                                className={styles.tag}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div style={{ minHeight: '30px' }}>
                        {imageurl
                            ? imageurl.map((i: any) => {
                                  return (
                                      // eslint-disable-next-line @next/next/no-img-element
                                      <img
                                          style={{ cursor: 'pointer' }}
                                          onClick={() => {
                                              navigator.clipboard.writeText(
                                                  `<img src="${i.src}" alt='${i.name}' width="50" height="50" />`,
                                              );
                                          }}
                                          src={i.src}
                                          alt=''
                                          width={50}
                                      />
                                  );
                              })
                            : null}
                    </div>

                    <input
                        type='file'
                        id='file-input'
                        name='ImageStyle'
                        onChange={onImageChange}
                    />
                    <SimpleMDE
                        options={options}
                        className={styles.editor}
                        value={body}
                        onChange={(e) => {
                            setBody(e);
                        }}
                    />
                    <div>
                        <label htmlFor='AUTH'>Basic Auth </label>
                        <input
                            placeholder='username'
                            type='text'
                            onChange={updateAuth}
                        />
                        <input
                            placeholder='password'
                            type='password'
                            onChange={updateAuth}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <button onClick={submitValue}>Submit</button>
                        <button onClick={reset}>clear</button>
                    </div>
                    {response ? (
                        <div
                            style={{
                                gridColumn: '1/3',
                            }}
                        >
                            {response}
                        </div>
                    ) : null}
                </div>
                <div className={styles['show-blog']}>
                    <h1>{title}</h1>
                    <ReactMarkdown
                        children={body}
                        rehypePlugins={[
                            rehypeRaw,
                            [rehypePrism, { ignoreMissing: true }],
                        ]}
                        remarkPlugins={[remarkGfm]}
                    />
                    {author ? <span>Author is {author}</span> : null}
                    <ul>
                        {labels.map((i: string) => (
                            <li key={i.toString()}>{i}</li>
                        ))}
                    </ul>
                    {body ? (
                        <>
                            <span>created on {date}</span>
                            <br />
                            <span>last edited on {date}</span>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Home;
