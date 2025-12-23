# SSH Remote Control Plugin

Enable Allow2Automate the ability to use SSH to configure and control remote devices for comprehensive parental control management.

## Description

This plugin extends Allow2Automate with SSH remote control capabilities, allowing parents to manage network devices, routers, and other SSH-enabled systems to enforce parental controls across the entire home network.

## Features

- Secure SSH connection management
- Remote command execution
- Enable/disable access controls on remote devices
- Connection status monitoring
- Support for multiple remote devices
- Automated device configuration
- Event-driven triggers for connection events
- Integration with router parental controls

## Installation

### Via NPM

```bash
npm install @allow2/allow2automate-ssh
```

### Via Git

```bash
git clone https://github.com/Allow2/allow2automate-ssh.git
cd allow2automate-ssh
npm install
npm run build
```

## Configuration

1. Install the plugin in your Allow2Automate application
2. Configure SSH credentials for target devices
3. Set up device profiles and connection details
4. Configure security settings and allowed commands

### Required Permissions

This plugin requires the following permissions:

- **network**: To establish SSH connections to remote devices and communicate over the network
- **configuration**: To read and modify plugin settings, including SSH credentials and device configurations

These permissions are necessary for the plugin to:
- Establish secure SSH connections to remote devices
- Execute commands on remote systems for parental control enforcement
- Store and manage SSH credentials securely
- Configure and monitor remote device states

**Security Note**: This plugin manages SSH credentials. Ensure credentials are stored securely and only trusted administrators have access to plugin configuration.

## Usage

### Connect to Remote Device

```javascript
import SSHPlugin from '@allow2/allow2automate-ssh';

const plugin = new SSHPlugin();

await plugin.actions.connect({
  host: '192.168.1.1',
  port: 22,
  username: 'admin',
  password: 'secure-password', // or use SSH key
  deviceId: 'router-main'
});
```

### Execute Remote Command

```javascript
const result = await plugin.actions.executeRemote({
  deviceId: 'router-main',
  command: 'iptables -A FORWARD -s 192.168.1.100 -j DROP',
  timeout: 30000
});

console.log('Command output:', result.stdout);
```

### Enable Access on Remote Device

```javascript
await plugin.actions.enableAccess({
  deviceId: 'router-main',
  childId: 'child-123',
  rules: {
    allowedIPs: ['192.168.1.100'],
    allowedPorts: [80, 443]
  }
});
```

### Disable Access on Remote Device

```javascript
await plugin.actions.disableAccess({
  deviceId: 'router-main',
  childId: 'child-123'
});
```

## API Documentation

### Actions

#### `connect`
- **Name**: Connect SSH
- **Description**: Connect to remote device via SSH
- **Parameters**:
  - `host` (string): Remote host IP or hostname
  - `port` (number): SSH port (default: 22)
  - `username` (string): SSH username
  - `password` (string, optional): SSH password
  - `privateKey` (string, optional): SSH private key
  - `deviceId` (string): Device identifier
- **Returns**: Connection status

#### `executeRemote`
- **Name**: Execute Remote Command
- **Description**: Execute command on remote device
- **Parameters**:
  - `deviceId` (string): Device identifier
  - `command` (string): Command to execute
  - `timeout` (number, optional): Execution timeout
- **Returns**: Command execution result

#### `enableAccess`
- **Name**: Enable Access
- **Description**: Enable access on remote device
- **Parameters**:
  - `deviceId` (string): Device identifier
  - `childId` (string): Child identifier
  - `rules` (object, optional): Access rules

#### `disableAccess`
- **Name**: Disable Access
- **Description**: Disable access on remote device
- **Parameters**:
  - `deviceId` (string): Device identifier
  - `childId` (string): Child identifier

### Triggers

#### `connectionEstablished`
- **Name**: Connection Established
- **Description**: Triggered when SSH connection is established
- **Payload**:
  - `deviceId` (string): Device identifier
  - `host` (string): Remote host
  - `timestamp` (date): Connection time

#### `connectionFailed`
- **Name**: Connection Failed
- **Description**: Triggered when SSH connection fails
- **Payload**:
  - `deviceId` (string): Device identifier
  - `host` (string): Remote host
  - `error` (string): Error message
  - `timestamp` (date): Failure time

#### `commandExecuted`
- **Name**: Command Executed
- **Description**: Triggered when remote command is executed
- **Payload**:
  - `deviceId` (string): Device identifier
  - `command` (string): Executed command
  - `exitCode` (number): Command exit code
  - `duration` (number): Execution duration in ms

## Security Considerations

This plugin handles sensitive SSH credentials and remote access:

1. **Secure credential storage** - Use encrypted storage for passwords and keys
2. **Limited command whitelist** - Restrict executable commands
3. **Connection validation** - Verify host fingerprints
4. **Audit logging** - Log all connection attempts and commands
5. **Timeout enforcement** - Prevent hung connections
6. **Least privilege** - Use minimal required permissions on remote devices

## Development Setup

```bash
# Clone the repository
git clone https://github.com/Allow2/allow2automate-ssh.git
cd allow2automate-ssh

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Common Use Cases

- Configure router parental controls
- Manage firewall rules on network devices
- Control access points and switches
- Automate device blocking/unblocking
- Synchronize settings across multiple devices
- Monitor device connectivity

## Requirements

- Node.js 12.0 or higher
- Allow2Automate 2.0.0 or higher
- SSH-enabled remote devices
- Valid SSH credentials for target devices

## License

MIT - See [LICENSE](LICENSE) file for details

## Support

- **Issues**: [GitHub Issues](https://github.com/Allow2/allow2automate-ssh/issues)
- **Documentation**: [Allow2 Documentation](https://www.allow2.com/docs)
- **Community**: [Allow2 Community Forums](https://community.allow2.com)

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## Author

Allow2

## Keywords

allow2automate, allow2, ssh, plugin, connectivity, parental-controls, network
