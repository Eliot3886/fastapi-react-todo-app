import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, LogOut, User, Loader2, AlertCircle } from 'lucide-react';

const ProtectedPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/protected', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          setError('Failed to fetch protected data.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Loader2 className="loading-spinner" style={{ width: '40px', height: '40px' }} />
        <p>Verifying credentials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <AlertCircle size={48} color="var(--error)" style={{ marginBottom: '1rem' }} />
        <h1>Error</h1>
        <p className="subtitle">{error}</p>
        <button className="btn btn-secondary" onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="glass-card protected-container">
      <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%' }}>
        <ShieldCheck size={48} color="var(--success)" />
      </div>
      
      <div>
        <h1>Protected Access Granted</h1>
        <p className="subtitle">You have successfully authenticated with a valid JWT token.</p>
      </div>

      <div className="user-badge">
        <User size={18} />
        <span>{data?.user || 'Authenticated User'}</span>
      </div>

      <div style={{ width: '100%', padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '16px', textAlign: 'left' }}>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Server Response:</p>
        <code style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>{JSON.stringify(data, null, 2)}</code>
      </div>

      <button className="btn logout-btn" onClick={handleLogout}>
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default ProtectedPage;
