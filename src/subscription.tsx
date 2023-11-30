import React, { useState } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to handle the subscription (e.g., send to a server)
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <div>
      <p>Subscribe to our newsletter:</p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
