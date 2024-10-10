// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Switch } from '@headlessui/react';

// // Mock functions to handle settings changes
// const handleToggle = (setting) => {
//     console.log(`${setting} toggled`);
// };

// const SettingsPage = () => {
//     const [darkMode, setDarkMode] = useState(false);
//     const [notifications, setNotifications] = useState(true);
//     const [autoUpdate, setAutoUpdate] = useState(false);

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="bg-gray-100 p-8 min-h-screen"
//         >
//             <div className="max-w-4xl mx-auto">
//                 <motion.div
//                     className="bg-white p-6 rounded-lg shadow-lg mb-8"
//                     initial={{ scale: 0.9 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Settings</h2>
                    
//                     {/* Dark Mode Toggle */}
//                     <motion.div
//                         className="mb-6"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h3 className="text-xl font-semibold text-gray-700 mb-2">Dark Mode</h3>
//                         <div className="flex items-center">
//                             <Switch
//                                 checked={darkMode}
//                                 onChange={() => {
//                                     setDarkMode(!darkMode);
//                                     handleToggle('Dark Mode');
//                                 }}
//                                 className={`${
//                                     darkMode ? 'bg-blue-600' : 'bg-gray-200'
//                                 } relative inline-flex h-6 w-11 items-center rounded-full`}
//                             >
//                                 <span className="sr-only">Dark Mode</span>
//                                 <span
//                                     className={`${
//                                         darkMode ? 'translate-x-6' : 'translate-x-1'
//                                     } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
//                                 />
//                             </Switch>
//                             <span className={`ml-4 text-gray-600 ${darkMode ? 'text-blue-600' : ''}`}>
//                                 {darkMode ? 'Enabled' : 'Disabled'}
//                             </span>
//                         </div>
//                     </motion.div>

//                     {/* Notifications Toggle */}
//                     <motion.div
//                         className="mb-6"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <h3 className="text-xl font-semibold text-gray-700 mb-2">Notifications</h3>
//                         <div className="flex items-center">
//                             <Switch
//                                 checked={notifications}
//                                 onChange={() => {
//                                     setNotifications(!notifications);
//                                     handleToggle('Notifications');
//                                 }}
//                                 className={`${
//                                     notifications ? 'bg-green-600' : 'bg-gray-200'
//                                 } relative inline-flex h-6 w-11 items-center rounded-full`}
//                             >
//                                 <span className="sr-only">Notifications</span>
//                                 <span
//                                     className={`${
//                                         notifications ? 'translate-x-6' : 'translate-x-1'
//                                     } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
//                                 />
//                             </Switch>
//                             <span className={`ml-4 text-gray-600 ${notifications ? 'text-green-600' : ''}`}>
//                                 {notifications ? 'Enabled' : 'Disabled'}
//                             </span>
//                         </div>
//                     </motion.div>

//                     {/* Auto Update Toggle */}
//                     <motion.div
//                         className="mb-6"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 0.4 }}
//                     >
//                         <h3 className="text-xl font-semibold text-gray-700 mb-2">Auto Update</h3>
//                         <div className="flex items-center">
//                             <Switch
//                                 checked={autoUpdate}
//                                 onChange={() => {
//                                     setAutoUpdate(!autoUpdate);
//                                     handleToggle('Auto Update');
//                                 }}
//                                 className={`${
//                                     autoUpdate ? 'bg-indigo-600' : 'bg-gray-200'
//                                 } relative inline-flex h-6 w-11 items-center rounded-full`}
//                             >
//                                 <span className="sr-only">Auto Update</span>
//                                 <span
//                                     className={`${
//                                         autoUpdate ? 'translate-x-6' : 'translate-x-1'
//                                     } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
//                                 />
//                             </Switch>
//                             <span className={`ml-4 text-gray-600 ${autoUpdate ? 'text-indigo-600' : ''}`}>
//                                 {autoUpdate ? 'Enabled' : 'Disabled'}
//                             </span>
//                         </div>
//                     </motion.div>

//                     {/* Fancy Button */}
//                     <motion.button
//                         className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.8, delay: 0.6 }}
//                         onClick={() => alert('Settings saved!')}
//                     >
//                         Save Changes
//                     </motion.button>
//                 </motion.div>
//             </div>
//         </motion.div>
//     );
// };

// export default SettingsPage;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@headlessui/react';
import { FaCog } from 'react-icons/fa'; // For the settings icon

const SettingsPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [autoUpdate, setAutoUpdate] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-900 text-white p-8 min-h-screen relative"
        >
            {/* Rotating Settings Icon */}
            <motion.div
                className="absolute top-4 right-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <FaCog size={50} className="text-blue-400" />
            </motion.div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8 relative overflow-hidden"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-gray-100 mb-8 relative z-10">Settings</h2>

                    {/* Dark Mode Toggle */}
                    <motion.div
                        className="mb-8 p-4 rounded-lg bg-gray-700 shadow-md relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-300 mb-4">Dark Mode</h3>
                        <div className="flex items-center">
                            <Switch
                                checked={darkMode}
                                onChange={setDarkMode}
                                className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors ${darkMode ? 'bg-blue-600' : 'bg-gray-600'}`}
                            >
                                <span
                                    className={`absolute inline-block h-6 w-6 bg-white rounded-full transform transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </Switch>
                            <span className={`ml-4 text-xl ${darkMode ? 'text-blue-300' : 'text-gray-400'}`}>
                                {darkMode ? 'Enabled' : 'Disabled'}
                            </span>
                        </div>
                    </motion.div>

                    {/* Notifications Toggle */}
                    <motion.div
                        className="mb-8 p-4 rounded-lg bg-gray-700 shadow-md relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-300 mb-4">Notifications</h3>
                        <div className="flex items-center">
                            <Switch
                                checked={notifications}
                                onChange={setNotifications}
                                className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors ${notifications ? 'bg-green-600' : 'bg-gray-600'}`}
                            >
                                <span
                                    className={`absolute inline-block h-6 w-6 bg-white rounded-full transform transition-transform ${notifications ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </Switch>
                            <span className={`ml-4 text-xl ${notifications ? 'text-green-300' : 'text-gray-400'}`}>
                                {notifications ? 'Enabled' : 'Disabled'}
                            </span>
                        </div>
                    </motion.div>

                    {/* Auto Update Toggle */}
                    <motion.div
                        className="mb-8 p-4 rounded-lg bg-gray-700 shadow-md relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-300 mb-4">Auto Update</h3>
                        <div className="flex items-center">
                            <Switch
                                checked={autoUpdate}
                                onChange={setAutoUpdate}
                                className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors ${autoUpdate ? 'bg-indigo-600' : 'bg-gray-600'}`}
                            >
                                <span
                                    className={`absolute inline-block h-6 w-6 bg-white rounded-full transform transition-transform ${autoUpdate ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </Switch>
                            <span className={`ml-4 text-xl ${autoUpdate ? 'text-indigo-300' : 'text-gray-400'}`}>
                                {autoUpdate ? 'Enabled' : 'Disabled'}
                            </span>
                        </div>
                    </motion.div>

                    {/* Fancy Save Button */}
                    <motion.button
                        className="px-8 py-4 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-transform transform hover:scale-105 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onClick={() => alert('Settings saved!')}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-30 -z-10" />
                        Save Changes
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SettingsPage;
 