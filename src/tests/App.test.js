import { render, screen } from '@testing-library/react';
import App from '../components/templates/App';

test('renders header and chatbot', () => {
  render(<App />);
  const headerElement = screen.getByText('Chat Bot');
  const chatBot = screen.getByTestId('chat-bot');
  expect(headerElement).toBeInTheDocument();
  expect(chatBot).toBeInTheDocument();
});
