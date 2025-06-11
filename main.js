function messageWhatsApp(serviceName) {
    const encodedMessage = encodeURIComponent(`Hi, I'm interested in your "${serviceName}" package. Please send me more details.`);
    window.open(`https://wa.me/94771234567?text=${encodedMessage}`, '_blank');
}
